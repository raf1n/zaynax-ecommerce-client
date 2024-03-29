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
    getAllActiveProducts: builder.query({
      query: ({ searchTerm }) => {
        let url = "/product/active";

        const queryParams = new URLSearchParams();

        if (searchTerm) {
          queryParams.append("search", searchTerm);
        }
        url += `?${queryParams.toString()}`;

        return {
          url,
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
    deleteProduct: builder.mutation({
      query: (data) => {
        const { productId } = data;
        return {
          url: `/product/${productId}`,
          method: "DELETE",
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
  useGetAllActiveProductsQuery,
  useDeleteProductMutation,
} = productApiSlice;
