import {createSlice} from '@reduxjs/toolkit';

const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        isOpen: <boolean>false,
    },
    reducers: {
        loaderSwitch(state, action) {
            state.isOpen = action.payload;
        }
    }
});

export const {loaderSwitch} = loaderSlice.actions;
export default loaderSlice.reducer;
