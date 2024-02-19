import { Link } from "react-router-dom";

const PromotionCard = () => {
  const status = "inactive";
  return (
    <div className="shadow-sm rounded-md text-gray-600 bg-white font-medium">
      <div className="flex items-center justify-between mt-3 mx-6">
        <div className="flex items-center gap-4 ">
          <p>1</p>
          <p>Test 2020</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="inline-block">
            <Link
              to={"/dashboard/promotion/update/:id"}
              className="bg-primary font-medium w-full text-black px-10 py-3  rounded-3xl focus:outline-none"
            >
              Edit
            </Link>
          </div>
          <div className="inline-block">
            <button
              className={`${
                status === "active"
                  ? "bg-orange-100 text-orange-800"
                  : "bg-red-100 text-red-500"
              } font-medium w-full text-black px-10 py-3 rounded-3xl focus:outline-none`}
            >
              Active
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-2 my-2"></div>
      <div className="flex items-center justify-between mt-4 m-6">
        <p>Created At: 10.09 AM, 3/11/2020</p>
        <p>Usages: 0</p>
        <p>Discount Rate: 3%</p>
        <p>Start Date: 3/11/2020</p>
        <p className="mr-1"> End Date: 3/11/2020</p>
      </div>
    </div>
  );
};

export default PromotionCard;
