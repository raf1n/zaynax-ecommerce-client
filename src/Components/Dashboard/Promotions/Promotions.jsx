import { Link } from "react-router-dom";
import AllPromotions from "./AllPromotions/AllPromotions";

const Promotions = () => {
  return (
    <div className="px-10 py-5">
      <div className="inline-block ml-5">
        <Link
          to="/dashboard/promotion/add"
          type="submit"
          className="bg-white font-medium w-full text-black px-10 py-3 shadow-md rounded-3xl focus:outline-none"
        >
          Add New Product
        </Link>
      </div>
      <div className="mt-5 ml-5">
        <AllPromotions />
      </div>
    </div>
  );
};

export default Promotions;
