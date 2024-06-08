import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "@/types/authTypes";
import { createDynamicAsyncThunk } from "@/utils/redux";
import { login, isLogin, logout } from "../services";

export const loginUser = createDynamicAsyncThunk("auth/login", login, true);
export const isLoginUser = createDynamicAsyncThunk("auth/isLogin", isLogin, true);
export const logoutUser = createDynamicAsyncThunk("auth/logout", logout, true);

const initialState: IAuthState = {
  isLoading: false,
  isAuthenticated: false,
  isError: false,
  message: null,
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle Login User
      .addCase(loginUser.pending, (state: IAuthState) => {
        state.isLoading = true;
        state.isError = false;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.fulfilled, (state: IAuthState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.message = action.payload.msg;
        state.token = action.payload.data.ac_token;
        state.user = action.payload.data.user;
      })
      // Handle Is Login User
      .addCase(isLoginUser.pending, (state: IAuthState) => {
        state.isLoading = true;
        state.isError = false;
        state.isAuthenticated = false;
      })
      .addCase(isLoginUser.fulfilled, (state: IAuthState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isAuthenticated = action.payload.isAuthenticated;
        state.message = action.payload.message;
        state.token = action.payload.ac_token;
        state.user = action.payload.user;
      })
      // Handle Is Logout User
      .addCase(logoutUser.pending, (state: IAuthState) => {
        state.isLoading = true;
        state.isError = false;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.fulfilled, (state: IAuthState, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.isAuthenticated = action.payload.isAuthenticated;
        state.message = action.payload.message;
        state.token = null;
        state.user = null;
      })
      .addMatcher(
        (action: PayloadAction<any>) => action.type.endsWith("/rejected"),
        (state: IAuthState, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.isAuthenticated = false;
          state.token = null;
          state.isError = true;
          state.message = action.payload.message || "Something Went Wrong In Auth";
        }
      );
  },
});

export default authSlice.reducer;
