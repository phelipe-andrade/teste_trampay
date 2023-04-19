import { IMessage } from "@/protocols/IMessage";
import { PayloadAction } from "@reduxjs/toolkit";

import {createSlice } from '@reduxjs/toolkit';

const message = createSlice({
  name: 'message',
  initialState: [''],
  reducers: {
    messageApp: (state, {payload}: PayloadAction<string[]>) => state = payload
  },

});

export const { messageApp } = message.actions;

export default message.reducer;