import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseURL = `https://zaynax-ecommerce-server.vercel.app/api/v1`;

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseURL,
    // credentials: "include",
  }),
  tagTypes: ["User", "Product", "Order", "Promotion"],
  endpoints: () => ({}),
});
