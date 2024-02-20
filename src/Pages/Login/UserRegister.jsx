import { useForm } from "react-hook-form";
import { useRegisterUserMutation } from "../../feature/auth/authApiSlice";
import { useState } from "react";
import AuthSuccessfulModal from "../../Components/Shared/AuthSuccessfulModal";
import { FaCheckCircle } from "react-icons/fa";

const UserRegister = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const [registerUser] = useRegisterUserMutation({});

  const onSubmit = async (data) => {
    const result = await registerUser({ bodyData: data });

    if (result?.data?.success) {
      setShowModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pt-32">
      <div className="lg:w-1/5 w-1/2 mx-auto">
        <div className=" bg-white shadow rounded-xl p-5">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className=" text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Phone</label>
                  <input
                    {...register("phone", { required: "This is required" })}
                    type="phone"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder=""
                  />
                  {errors.phone && (
                    <span className="text-red-600 text-sm mt-1">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Password</label>
                  <input
                    {...register("password", { required: "This is required" })}
                    type="password"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder=""
                  />
                  {errors.password && (
                    <span className="text-red-600 text-sm mt-1">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <button className="bg-primary font-medium  flex justify-center items-center w-full text-black px-4 py-3 mx-16  rounded-3xl focus:outline-none">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
        <AuthSuccessfulModal setShowModal={setShowModal} showModal={showModal}>
          <div className="w-full bg-white p-4 flex flex-col items-center px-10 py-4">
            <FaCheckCircle size={30} />

            <p className="text-lg mt-5 text-gray-500">You Signed Up</p>
            <p className="text-lg text-gray-500">successfully </p>
          </div>
        </AuthSuccessfulModal>
      </div>
    </div>
  );
};

export default UserRegister;
