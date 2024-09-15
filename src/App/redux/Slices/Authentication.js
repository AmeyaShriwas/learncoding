import { createSlice } from "@reduxjs/toolkit";

const Authentication = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {
        LoginFuntion: (state, action)=> {
           state.initialState = action.payload
        },
        LogoutFuntion: (state, action)=> {
            state.initialState = {}
        }
    }
})

export const {LoginFuntion, LogoutFuntion} = Authentication.actions;
export default Authentication.reducer
