import { apiSlice } from "../api/apiSlice";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => {
        const { formData } = data;
        return {
          url: `/order`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: formData,
        };
      },

      invalidatesTags: ["Order"],
    }),

    getAllOrders: builder.query({
      query: ({ status }) => {
        let url = "/order";

        const queryParams = new URLSearchParams();

        if (status) {
          queryParams.append("status", status);
        }
        url += `?${queryParams.toString()}`;

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["Order"],
    }),

    updateOrder: builder.mutation({
      query: (data) => {
        const { formData, orderId } = data;
        return {
          url: `/order/${orderId}`,
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

export const {
  useGetAllOrdersQuery,
  useUpdateOrderMutation,
  useCreateOrderMutation,
} = orderApiSlice;
