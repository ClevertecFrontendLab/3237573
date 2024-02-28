import {createSlice} from '@reduxjs/toolkit';
import {emailCheck, userLogin, userRegistration} from "@redux/auth/authActions.ts";

interface AuthState {
    loading: boolean;
    userInfo: object;
    userAccessToken: string;
    error?: any
    success: boolean,
    loginRemember: boolean
}

const initialState: AuthState = {
    loading: false,
    userInfo: {},
    userAccessToken: "",
    error: null,
    success: false,
    loginRemember: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authStateClear: (state) => {
            state.userInfo = {};
            state.userAccessToken = "";
            state.error = null;
            state.success = false
            state.loginRemember = false
            localStorage.setItem('userAccessToken', "")
            return state;
        },
        loginRememberSwitch: (state) => {
            state.loginRemember = !state.loginRemember
        }
    },
    extraReducers: builder => {
        builder
            .addCase(userRegistration.pending, (state) => {
                console.log('loginUser.fulfilled pending');
                state.loading = true
                state.error = null
            })
            .addCase(userRegistration.fulfilled, (state) => {
                state.loading = false
                state.success = true
            })
            .addCase(userRegistration.rejected, (state, {payload}) => {
                state.loading = false
                state.error = payload
            })
            .addCase(userLogin.pending, (state) => {
                console.log('loginUser.fulfilled pending');
                state.loading = true
                state.error = null
            })
            .addCase(userLogin.fulfilled, (state, {payload}) => {
                console.log('loginUser.fulfilled payload:', payload);
                state.loading = false
                state.userInfo = payload
                state.userAccessToken = payload.accessToken
                if (state.loginRemember) {
                    localStorage.setItem('userAccessToken', state.userAccessToken)
                }
                state.success = true
            })
            .addCase(userLogin.rejected, (state, {payload}) => {
                console.log('loginUser.rejected payload:', payload);
                state.loading = false
                state.error = payload
                state.success = false
            })
            .addCase(emailCheck.pending, (state) => {
                state.loading = true
                state.error = ""
            })
            .addCase(emailCheck.fulfilled, (state) => {
                state.loading = false
                state.success = true
            })
            .addCase(emailCheck.rejected, (state, {payload}) => {
                state.loading = false
                state.error = payload
            })
    },
});

export const {authStateClear, loginRememberSwitch} = authSlice.actions;
export default authSlice.reducer

