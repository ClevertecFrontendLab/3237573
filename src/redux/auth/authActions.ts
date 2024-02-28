import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

const backendURL = 'https://marathon-api.clevertec.ru/auth'
const config = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
}

interface UserRegistrationProps {
    email: string,
    password: string
}

export const userRegistration = createAsyncThunk(
    'auth/registration',
    async ({email, password}: UserRegistrationProps, {rejectWithValue}) => {
        try {
            await axios.post(
                `${backendURL}/registration`,
                {email, password},
                config
            )
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return rejectWithValue(error.response)
        }
    }
)

export interface UserLoginProps {
    email: string,
    password: string
}

export const userLogin = createAsyncThunk(
    'users/login',
    async ({email, password}: UserLoginProps, {rejectWithValue}) => {
        try {
            const {data} = await axios.post(
                `${backendURL}/login`,
                {email, password},
                config
            )
            return data
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return rejectWithValue(error.response)
        }
    });

export const emailCheck = createAsyncThunk(
    'email/check',
    async ({email}: UserLoginProps, {rejectWithValue}) => {
        try {
            const {data} = await axios.post(
                `${backendURL}/check-email`,
                {email},
                config
            )
            return data
        } catch (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return rejectWithValue(error.response)
        }
    });
