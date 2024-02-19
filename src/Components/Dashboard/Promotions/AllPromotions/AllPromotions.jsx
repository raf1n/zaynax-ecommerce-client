import PromotionCard from "../../../Cards/PromotionCard";

const AllPromotions = () => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <PromotionCard />
        <PromotionCard />
      </div>
    </div>
  );
};

export default AllPromotions;
