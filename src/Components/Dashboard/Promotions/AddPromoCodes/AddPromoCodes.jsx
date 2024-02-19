import { useState } from "react";
import { useForm } from "react-hook-form";

import { useParams } from "react-router-dom";

import { FaCheckCircle } from "react-icons/fa";
import ToggleButton from "../../../Shared/ToggleButton";

const AddPromoCodes = () => {
  const { id } = useParams();

  console.log(id);

  const [showModal, setShowModal] = useState(false);

  const [status, setStatus] = useState(true);

  const handleToggle = (value) => {
    setStatus(value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const data = {};

  const onUpdate = async (data) => {
    // const formData = new FormData();
    // if (data?.productName !== data?.data?.name) {
    //   formData.append("name", data?.productName);
    // }
    // if (data?.price !== data?.data?.price) {
    //   formData.append("price", data?.price);
    // }
    // if (data?.discount !== data?.data?.discount) {
    //   formData.append("discount", data?.discount);
    // }
    // if (data?.shipping !== data?.data?.shippingCharge) {
    //   formData.append("shippingCharge", data?.shipping);
    // }
    // if (data?.color !== data?.data?.color) {
    //   formData.append("color", data?.color);
    // }
    // if (data?.size !== data?.data?.size) {
    //   formData.append("size", data?.size);
    // }
    // if (status !== (data?.data?.status === "active" ? true : false)) {
    //   formData.append("status", status === true ? "active" : "inactive");
    // }
    // if (imageFile) {
    //   formData.append("image", imageFile);
    // }
    // const result = await updateProduct({ formData, productId: id });
    // if (result.data?.success) {
    //   setShowModal(true);
    // }
  };

  const onSubmit = async (data) => {
    // const formData = new FormData();
    // formData.append("name", data?.productName);
    // formData.append("price", data?.price);
    // formData.append("discount", data?.discount);
    // formData.append("shippingCharge", data?.shipping);
    // formData.append("color", data?.color);
    // formData.append("size", data?.size);
    // formData.append("status", status === true ? "active" : "inactive");
    // formData.append("image", imageFile);
    // formData.append("productName", data?.productName);
    // const result = await addProduct({ formData });
    // if (result.data?.success) {
    //   setShowModal(true);
    // }
  };

  setTimeout(() => {
    setShowModal(false);
  }, 1500);

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
                  {...register("code", { required: "This is required" })}
                  defaultValue={data?.data?.code}
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full lg:text-base  sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-700"
                  placeholder=""
                />
                {errors.code && (
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
                  defaultValue={data?.data?.startDate}
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
                  defaultValue={data?.data?.endDate}
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
                  {...register("rate", { required: "This is required" })}
                  defaultValue={data?.data?.rate}
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full lg:text-base sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder=""
                />
                {errors.rate && (
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
            {/* <div className="pt-6 flex items-center space-x-4">
              <button
                disabled={isLoading || updateLoading}
                type="submit"
                className={`bg-primary font-medium gap-2 flex justify-center items-center w-full text-black px-4 py-3  rounded-3xl focus:outline-none ${
                  id ? "mx-10" : "mx-16 "
                }`}
              >
                {id ? "Update" : "Add"} Product
                {isLoading ||
                  (updateLoading && (
                    <div className=" w-6 h-6 border-4 border-white border-dashed rounded-full animate-spin "></div>
                  ))}
              </button>
            </div> */}
          </form>
        </div>
        {/* {updateSuccess ? (
          <Modal setShowModal={setShowModal} showModal={showModal}>
            <div className="w-full bg-white p-4 flex flex-col items-center px-10 py-4">
              <FaCheckCircle size={30} />

              <p className="text-lg mt-5 text-gray-500">Your Product Updated</p>
              <p className="text-lg text-gray-500">successfully </p>
            </div>
          </Modal>
        ) : (
          <Modal setShowModal={setShowModal} showModal={showModal}>
            <div className="w-full bg-white p-4 flex flex-col items-center px-10 py-4">
              <FaCheckCircle size={30} />

              <p className="text-lg mt-5 text-gray-500">Your Product added</p>
              <p className="text-lg text-gray-500">successfully </p>
            </div>
          </Modal>
        )} */}
      </div>
    </div>
  );
};

export default AddPromoCodes;
