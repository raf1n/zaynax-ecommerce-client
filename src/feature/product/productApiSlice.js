import { apiSlice } from "../api/apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => {
        const { formData } = data;
        return {
          url: `/product`,
          method: "POST",
          preparedHeaders: (headers) => {
            headers.set("Content-type", "multipart/form-data");
            return headers;
          },
          body: formData,
          formData: true,
        };
      },

      invalidatesTags: ["Product"],
    }),
    getAllProducts: builder.query({
      query: () => {
        return {
          url: `/product`,
          method: "GET",
        };
      },
      providesTags: ["Product"],
    }),
    getSingleProduct: builder.query({
      query: (data) => {
        const { productId } = data;
        return {
          url: `/product/${productId}`,
          method: "GET",
        };
      },
      providesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: (data) => {
        const { formData, productId } = data;
        return {
          url: `/product/${productId}`,
          method: "PATCH",
          preparedHeaders: (headers) => {
            headers.set("Content-type", "multipart/form-data");
            return headers;
          },
          body: formData,
          formData: true,
        };
      },

      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useAddProductMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} = productApiSlice;
