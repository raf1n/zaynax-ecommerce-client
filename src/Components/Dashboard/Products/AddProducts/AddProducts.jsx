import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ToggleButton from "../../../Shared/ToggleButton";
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../../../feature/product/productApiSlice";
import Modal from "../../../Shared/Modal";
import { useParams, useNavigate } from "react-router-dom";

import { FaCheckCircle } from "react-icons/fa";

const AddProducts = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  console.log(id);

  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [status, setStatus] = useState(true);

  const { data, isLoading: getSingleProductLoading } = useGetSingleProductQuery(
    { productId: id }
  );
  console.log(data);

  useEffect(() => {
    if (data) {
      setImagePreview(data?.data?.image);
      setStatus(data?.data?.status === "active" ? true : false);
    }
  }, [data]);

  const handleToggle = (value) => {
    setStatus(value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addProduct, { isLoading }] = useAddProductMutation({});
  console.log("product", data?.data);

  const [deleteProduct, { isLoading: deleteLoading }] =
    useDeleteProductMutation({});

  const [
    updateProduct,
    { isLoading: updateLoading, isSuccess: updateSuccess },
  ] = useUpdateProductMutation({});

  const onUpdate = async (data) => {
    const formData = new FormData();

    if (data?.productName !== data?.data?.name) {
      formData.append("name", data?.productName);
    }
    if (data?.price !== data?.data?.price) {
      formData.append("price", data?.price);
    }

    if (data?.discount !== data?.data?.discount) {
      formData.append("discount", data?.discount);
    }

    if (data?.shipping !== data?.data?.shippingCharge) {
      formData.append("shippingCharge", data?.shipping);
    }

    if (data?.color !== data?.data?.color) {
      formData.append("color", data?.color);
    }

    if (data?.size !== data?.data?.size) {
      formData.append("size", data?.size);
    }

    formData.append("status", status === true ? "active" : "inactive");

    if (imageFile) {
      formData.append("image", imageFile);
    }

    const result = await updateProduct({ formData, productId: id });

    if (result.data?.success) {
      setShowModal(true);
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("name", data?.productName);
    formData.append("price", data?.price);
    formData.append("discount", data?.discount);
    formData.append("shippingCharge", data?.shipping);
    formData.append("color", data?.color);
    formData.append("size", data?.size);
    formData.append("status", status === true ? "active" : "inactive");
    formData.append("image", imageFile);
    formData.append("productName", data?.productName);

    const result = await addProduct({ formData });

    if (result.data?.success) {
      setShowModal(true);
    }
  };

  const handleDelete = async () => {
    const result = await deleteProduct({ productId: id });

    if (result.data?.success) {
      navigate("/dashboard/products");
    }
  };

  if (getSingleProductLoading)
    return (
      <div className="mt-10 w-10 mx-auto h-10 border-4 border-primary border-dashed rounded-full animate-spin "></div>
    );

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col pt-10 pb-10">
      <div className="lg:w-1/4 w-1/2 mx-auto">
        <div className=" bg-white shadow rounded-xl p-3">
          <form
            onSubmit={id ? handleSubmit(onUpdate) : handleSubmit(onSubmit)}
            className="px-2 py-2"
          >
            <div className=" text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div
                action="#"
                className="h-40 mx-auto bg-primary mb-6 rounded-lg border"
              >
                <input
                  onChange={handleFileChange}
                  type="file"
                  id="file-upload"
                  className="hidden"
                />
                <label
                  htmlFor="file-upload"
                  className="font-normal flex flex-col items-center justify-center w-full h-full cursor-pointer"
                >
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Product Preview"
                      className="h-full w-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center w-full h-full">
                      <p className="text-md font-medium text-black text-center">
                        Upload
                      </p>
                      <p className="text-md font-medium text-black text-center">
                        Product Image
                      </p>
                      <p className="text-sm font-normal text-black text-center">
                        Image Size Must be
                      </p>
                      <p className="text-sm font-normal text-black text-center">
                        500x500
                      </p>
                    </div>
                  )}
                </label>
              </div>
              <div className="flex flex-col ">
                <label className="leading-loose text-base font-medium">
                  Product Name
                </label>
                <input
                  {...register("productName", { required: "This is required" })}
                  defaultValue={data?.data?.name}
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full lg:text-base  sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-700"
                  placeholder=""
                />
                {errors.productName && (
                  <span className="text-red-600 text-sm mt-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="leading-loose text-base font-medium">
                  Product Price (Before Discount)
                </label>
                <input
                  {...register("price", { required: "This is required" })}
                  defaultValue={data?.data?.price}
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full lg:text-base sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder=""
                />
                {errors.price && (
                  <span className="text-red-600 text-sm mt-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="leading-loose text-base font-medium">
                  Discount Rate (%)
                </label>
                <input
                  {...register("discount")}
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
                  Shipping Charge
                </label>
                <input
                  {...register("shipping")}
                  defaultValue={data?.data?.shippingCharge}
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full lg:text-base sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder=""
                />
                {errors.shipping && (
                  <span className="text-red-600 text-sm mt-1">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <label className="leading-loose text-base font-medium">
                  Color
                </label>
                <input
                  {...register("color")}
                  defaultValue={data?.data?.color}
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full lg:text-base sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col">
                <label className="leading-loose text-base font-medium">
                  Size
                </label>
                <input
                  {...register("size")}
                  defaultValue={data?.data?.size}
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
                className={`bg-primary font-medium gap-2 flex justify-center items-center w-full text-black px-4 py-2  rounded-3xl focus:outline-none ${
                  id ? "mx-4" : "mx-16 "
                }`}
              >
                {id ? "Update" : "Add"}
                {(isLoading || updateLoading) && (
                  <div className=" w-6 h-6 border-4 border-white border-dashed rounded-full animate-spin "></div>
                )}
              </button>
              {id && (
                <button
                  onClick={handleDelete}
                  disabled={deleteLoading}
                  type="submit"
                  className={`bg-red-400 font-medium gap-2 flex justify-center items-center w-full text-white px-4 py-2  rounded-3xl focus:outline-none ${
                    id ? "mx-4" : "mx-16 "
                  }`}
                >
                  Delete
                  {deleteLoading && (
                    <div className=" w-6 h-6 border-4 border-white border-dashed rounded-full animate-spin "></div>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
        {updateSuccess ? (
          <Modal
            redirect={"/dashboard/products"}
            setShowModal={setShowModal}
            showModal={showModal}
          >
            <div className="w-full bg-white p-4 flex flex-col items-center px-10 py-4">
              <FaCheckCircle size={30} />

              <p className="text-lg mt-5 text-gray-500">Your Product Updated</p>
              <p className="text-lg text-gray-500">successfully </p>
            </div>
          </Modal>
        ) : (
          <Modal
            redirect={"/dashboard/products"}
            setShowModal={setShowModal}
            showModal={showModal}
          >
            <div className="w-full bg-white p-4 flex flex-col items-center px-10 py-4">
              <FaCheckCircle size={30} />

              <p className="text-lg mt-5 text-gray-500">Your Product added</p>
              <p className="text-lg text-gray-500">successfully </p>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default AddProducts;
