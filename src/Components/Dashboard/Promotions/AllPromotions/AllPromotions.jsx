import { useGetAllPromotionQuery } from "../../../../feature/promotion/promotionApiSlice";
import PromotionCard from "../../../Cards/PromotionCard";

const AllPromotions = () => {
  const { data, isLoading } = useGetAllPromotionQuery({});

  console.log(data);

  if (isLoading)
    return (
      <div className=" w-10 mx-auto h-10 border-4 border-primary border-dashed rounded-full animate-spin "></div>
    );

  return (
    <div>
      <div className="flex flex-col gap-6">
        {data?.data?.map((promotion, index) => (
          <PromotionCard
            index={index + 1}
            key={promotion?._id}
            promotion={promotion}
          />
        ))}
      </div>
    </div>
  );
};

export default AllPromotions;
