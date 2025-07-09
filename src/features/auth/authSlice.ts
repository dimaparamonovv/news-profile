import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { AuthState } from "./types";

const loadAuthState = (): AuthState => {
  const data = localStorage.getItem("auth");

  if (data) return JSON.parse(data);

  return { isAuth: false, username: null };
};

const initialState: AuthState = loadAuthState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuth = true;
      state.username = action.payload;
      localStorage.setItem("auth", JSON.stringify(state));
    },
    logout: (state) => {
      state.isAuth = false;
      state.username = null;
      localStorage.setItem("auth", JSON.stringify(state));
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
