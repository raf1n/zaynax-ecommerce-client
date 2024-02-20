import moment from "moment";
import { Link } from "react-router-dom";

const PromotionCard = ({ promotion, index }) => {
  return (
    <div className="shadow-sm rounded-md text-gray-700 bg-white font-medium">
      <div className="flex items-center justify-between mt-3 mx-6">
        <div className="flex items-center gap-4 ">
          <p>{index}</p>
          <p>{promotion?.promoCode}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="inline-block">
            <Link
              to={"/dashboard/promotion/update/" + promotion?._id}
              className="bg-primary font-medium w-full text-black px-10 py-3  rounded-3xl focus:outline-none"
            >
              Edit
            </Link>
          </div>
          <div className="inline-block">
            <button
              className={`${
                promotion?.status === "active"
                  ? "bg-orange-200 text-orange-800"
                  : "bg-red-100 text-red-500"
              } font-medium w-full text-black px-8 py-3 rounded-3xl focus:outline-none`}
            >
              {promotion?.status === "active" ? "Active" : "Deactive"}
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 my-2"></div>
      <div className="flex items-center justify-between mt-4 m-6">
        <p>
          Created At:{" "}
          {moment(promotion?.createdAt).format("hh.mm A, MM/DD/YYYY")}
        </p>
        <p>Usages: {promotion?.useTime}</p>
        <p>Discount Rate: {promotion?.discount}%</p>
        <p>Start Date: {moment(promotion?.startDate).format("M/D/YYYY")}</p>
        <p className="mr-1">
          End Date: {moment(promotion?.endDate).format("M/D/YYYY")}
        </p>
      </div>
    </div>
  );
};

export default PromotionCard;
