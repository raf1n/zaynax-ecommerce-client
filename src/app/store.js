import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "../feature/api/apiSlice";
import authReducer from "../feature/auth/authSlice";
import cartReducer from "../feature/cart/cartSlice";
import searchReducer from "../feature/search/searchSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    cart: cartReducer,
    search: searchReducer,
  },
  // devTools: import.meta.env.VITE_ENV !== "PRODUCTION",
  middleware: (gDM) => gDM().concat(apiSlice.middleware),
});

setupListeners(store.dispatch);
