import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("auth"))?.user || undefined,
  isLoggedIn: JSON.parse(localStorage.getItem("auth"))?.isLoggedIn || false,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    userLoggedOut: (state) => {
      state.user = undefined;
      localStorage.removeItem("auth");
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export default authSlice.reducer;
