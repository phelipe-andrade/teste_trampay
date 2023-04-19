import { IUserRecover } from "@/protocols/user/IUserRevocer";
import { PayloadAction } from "@reduxjs/toolkit";

import {createSlice } from '@reduxjs/toolkit';


export interface ILogin {
  login: boolean;
}

const userLogin = createSlice({
  name: 'user',
  initialState: {
    login: false,
    email: ''
  },
  reducers: {
    loginUser(state, {payload}: PayloadAction<ILogin>) {
      state.login = payload.login;
    },
    emailResetPassword(state, {payload}: PayloadAction<IUserRecover>) {
      state.email = payload.email;
    },
  },

});

export const { loginUser, emailResetPassword } = userLogin.actions;

export default userLogin.reducer;