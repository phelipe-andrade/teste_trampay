import { PayloadAction } from "@reduxjs/toolkit";

import {createSlice } from '@reduxjs/toolkit';


export interface ITheme {
  theme: string;
}


const theme = createSlice({
  name: 'theme',
  initialState: 'ligth',
  reducers: {
    themeApp: (state, {payload}: PayloadAction<string>) => state = payload,
  },

});

export const { themeApp } = theme.actions;

export default theme.reducer;