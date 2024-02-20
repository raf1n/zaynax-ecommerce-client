import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useParams } from "react-router-dom";

import { FaCheckCircle } from "react-icons/fa";
import ToggleButton from "../../../Shared/ToggleButton";
import {
  useAddPromotionMutation,
  useGetSinglePromotionQuery,
  useUpdatePromotionMutation,
} from "../../../../feature/promotion/promotionApiSlice";
import Modal from "../../../Shared/Modal";
import moment from "moment";

const AddPromoCodes = () => {
  const { id } = useParams();

  console.log(id);

  const { data, isLoading: getLoading } = useGetSinglePromotionQuery({
    promotionId: id,
  });

  console.log(data);

  const [showModal, setShowModal] = useState(false);

  const [status, setStatus] = useState(true);

  const handleToggle = (value) => {
    setStatus(value);
  };

  useEffect(() => {
    if (data?.data?.status === "active") {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [data]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addPromotion, { isLoading }] = useAddPromotionMutation({});

  const [
    updatePromotion,
    { isLoading: updateLoading, isSuccess: updateSuccess },
  ] = useUpdatePromotionMutation({});

  const onUpdate = async (data) => {
    console.log(data);

    const formData = {
      status: status === true ? "active" : "deactive",
      ...data,
    };

    const result = await updatePromotion({ formData, promotionId: id });

    console.log(result);

    if (result.data?.success) {
      setShowModal(true);
    }
  };

  const onSubmit = async (data) => {
    console.log(data);

    const formData = {
      status: status === true ? "active" : "deactive",
      ...data,
    };

    const result = await addPromotion({ formData });

    console.log(result);

    if (result.data?.success) {
      setShowModal(true);
    }
  };

  setTimeout(() => {
    setShowModal(false);
  }, 1500);

  if (getLoading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col pt-10 pb-10">
      <div className="lg:w-1/4 w-1/2 mx-auto">
        <div className=" bg-white shadow rounded-xl p-3">
          <form
            onSubmit={id ? handleSubmit(onUpdate) : handleSubmit(onSubmit)}
            className="px-2 py-2"
          >
            <div className=" text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="flex flex-col ">
                <label className="leading-loose text-base font-medium">
                  Promo Code
                </label>
                <input
                  {...register("promoCode", { required: "This is required" })}
                  defaultValue={data?.data?.promoCode}
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full lg:text-base  sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-700"
                  placeholder=""
                />
                {errors.promoCode && (
                  <span className="text-red-600 text-sm mt-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="leading-loose text-base font-medium">
                  Start Date
                </label>
                <input
                  {...register("startDate", { required: "This is required" })}
                  defaultValue={
                    data?.data?.startDate
                      ? moment(data?.data?.startDate).format("YYYY-MM-DD")
                      : ""
                  }
                  type="date"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full lg:text-base sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder=""
                />
                {errors.startDate && (
                  <span className="text-red-600 text-sm mt-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="leading-loose text-base font-medium">
                  End Date
                </label>
                <input
                  {...register("endDate", { required: "This is required" })}
                  defaultValue={
                    data?.data?.endDate
                      ? moment(data?.data?.endDate).format("YYYY-MM-DD")
                      : ""
                  }
                  type="date"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full lg:text-base sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder=""
                />
                {errors.endDate && (
                  <span className="text-red-600 text-sm mt-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="leading-loose text-base font-medium">
                  Discount Rate
                </label>
                <input
                  {...register("discount", { required: "This is required" })}
                  defaultValue={data?.data?.discount}
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full lg:text-base sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder=""
                />
                {errors.discount && (
                  <span className="text-red-600 text-sm mt-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="leading-loose text-base font-medium">
                  Use Time
                </label>
                <input
                  {...register("useTime")}
                  defaultValue={data?.data?.useTime}
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full lg:text-base sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder=""
                />
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p className="text-base font-medium"> Active</p>
              <ToggleButton handleToggle={handleToggle} status={status} />
            </div>
            <div className="pt-6 flex items-center space-x-4">
              <button
                disabled={isLoading || updateLoading}
                type="submit"
                className={`bg-primary font-medium text-sm gap-2 flex justify-center items-center w-full text-black px-4 py-3  rounded-3xl focus:outline-none ${
                  id ? "mx-6" : "mx-6 "
                }`}
              >
                {id ? "Update" : "Add"} Promo Code
                {(isLoading || updateLoading) && (
                  <div className=" w-6 h-6 border-4 border-white border-dashed rounded-full animate-spin "></div>
                )}
              </button>
            </div>
          </form>
        </div>
        {updateSuccess ? (
          <Modal setShowModal={setShowModal} showModal={showModal}>
            <div className="w-full bg-white p-4 flex flex-col items-center px-10 py-4">
              <FaCheckCircle size={30} />

              <p className="text-lg mt-5 text-gray-500">
                Your Promotion Updated
              </p>
              <p className="text-lg text-gray-500">successfully </p>
            </div>
          </Modal>
        ) : (
          <Modal setShowModal={setShowModal} showModal={showModal}>
            <div className="w-full bg-white p-4 flex flex-col items-center px-10 py-4">
              <FaCheckCircle size={30} />

              <p className="text-lg mt-5 text-gray-500">Your Promotion added</p>
              <p className="text-lg text-gray-500">successfully </p>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default AddPromoCodes;
