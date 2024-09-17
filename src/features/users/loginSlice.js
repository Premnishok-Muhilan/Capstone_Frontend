import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: "",
    password: "",
    //new code
    confirmPassword: "",
    passwordResetToken: "",
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setPasswordResetToken: (state, action) => {
      state.passwordResetToken = action.payload;
    },
  },
});

export const {
  setUsername,
  setPassword,
  setConfirmPassword,
  setPasswordResetToken,
} = loginSlice.actions;

export const selectUsername = (state) => state.login.username;
export const selectPassword = (state) => state.login.password;
export const selectConfirmPassword = (state) => state.login.confirmPassword;
export const selectPasswordResetToken = (state) => state.login.passwordResetToken;

export default loginSlice.reducer;
