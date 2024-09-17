import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  },
  reducers: {
    setFirstName: (state, action) => {
      state.first_name = action.payload;
    },
    setLastName: (state, action) => {
      state.last_name = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setUsername, setEmail, setPassword } =
  registerSlice.actions;

export const selectFirstName = (state) => state.register.first_name;
export const selectLastName = (state) => state.register.last_name;
export const selectUsername = (state) => state.register.username;

export const selectEmail = (state) => state.register.email;
export const selectPassword = (state) => state.register.password;

export default registerSlice.reducer;
