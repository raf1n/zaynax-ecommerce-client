import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => {
        const { bodyData } = data;
        return {
          url: `/auth/register`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: bodyData,
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              // access_token: result?.data?.data?.accessToken,
              isLoggedIn: true,
              user: result?.data?.data?.user,
            })
          );
          dispatch(
            userLoggedIn({
              isLoggedIn: true,
              user: result.data?.data?.user,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
      providesTags: [""],
    }),

    adminUserLogin: builder.mutation({
      query: (data) => {
        const { bodyData } = data;
        return {
          url: `auth/admin/login`,
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: bodyData,
        };
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              // access_token: result?.data?.data?.accessToken,
              isLoggedIn: true,
              user: result?.data?.data?.user,
            })
          );
          dispatch(
            userLoggedIn({
              // access_token: result?.data?.data?.accessToken,
              isLoggedIn: true,
              user: result?.data?.data?.user,
            })
          );
        } catch (error) {
          // do nothing
        }
      },
      providesTags: ["User"],
    }),
  }),
});

export const { useRegisterUserMutation, useAdminUserLoginMutation } =
  authApiSlice;
