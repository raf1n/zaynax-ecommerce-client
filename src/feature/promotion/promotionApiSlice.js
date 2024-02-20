import { apiSlice } from "../api/apiSlice";

export const promotionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPromotion: builder.mutation({
      query: (data) => {
        const { formData } = data;
        return {
          url: `/promotion`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: formData,
        };
      },

      invalidatesTags: ["Promotion"],
    }),
    getAllPromotion: builder.query({
      query: () => {
        return {
          url: `/promotion`,
          method: "GET",
        };
      },
      providesTags: ["Promotion"],
    }),
    getSinglePromotion: builder.query({
      query: (data) => {
        const { promotionId } = data;
        return {
          url: `/promotion/${promotionId}`,
          method: "GET",
        };
      },
      providesTags: ["Promotion"],
    }),
    updatePromotion: builder.mutation({
      query: (data) => {
        const { formData, promotionId } = data;
        return {
          url: `/promotion/${promotionId}`,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: formData,
        };
      },

      invalidatesTags: ["Promotion"],
    }),

    validatePromoCode: builder.mutation({
      query: (data) => {
        const { promoCode } = data;
        return {
          url: `/promotion/validate`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: { promoCode },
        };
      },

      invalidatesTags: ["Promotion"],
    }),
  }),
});

export const {
  useAddPromotionMutation,
  useGetAllPromotionQuery,
  useGetSinglePromotionQuery,
  useUpdatePromotionMutation,
  useValidatePromoCodeMutation,
} = promotionApiSlice;
