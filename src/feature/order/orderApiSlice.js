import { apiSlice } from "../api/apiSlice";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => {
        return {
          url: `/order`,
          method: "GET",
        };
      },
      providesTags: ["Order"],
    }),

    updateOrder: builder.mutation({
      query: (data) => {
        const { formData, productId } = data;
        return {
          url: `/order/${productId}`,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: formData,
        };
      },

      invalidatesTags: ["Order"],
    }),
  }),
});

export const { useGetAllOrdersQuery, useUpdateOrderMutation } = orderApiSlice;
