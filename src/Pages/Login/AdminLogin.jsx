import { useForm } from "react-hook-form";
import { useAdminUserLoginMutation } from "../../feature/auth/authApiSlice";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [adminLogin, { isLoading }] = useAdminUserLoginMutation({});

  const onSubmit = async (data) => {
    const result = await adminLogin({ bodyData: data });

    if (result?.data?.success) {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex flex-col pt-20">
        <h1 className="mx-auto font-medium text-4xl mb-6">Admin Panel</h1>
        <div className="lg:w-1/5 w-1/2 mx-auto">
          <div className=" bg-white shadow rounded-xl p-5">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className=" text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">User ID</label>
                    <input
                      {...register("userId", { required: "This is required" })}
                      type="text"
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder=""
                    />
                    {errors.userId && (
                      <span className="text-red-600 text-sm mt-1">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Password</label>
                    <input
                      {...register("password", {
                        required: "This is required",
                      })}
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
                  <button className="bg-primary font-medium  flex justify-center items-center w-full text-black px-4 gap-1 py-3 mx-16  rounded-3xl focus:outline-none">
                    Sign in
                    {isLoading && (
                      <div className=" w-6 h-6 border-4 border-white border-dashed rounded-full animate-spin "></div>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="lg:w-1/5 w-1/2 bg-white   mx-auto rounded-xl mt-10 border-2 border-gray-400">
          <div className="p-5">
            <div className="">
              <h1 className="font-semibold">
                Use Following Credentials to login
              </h1>
              <div className="mt-2">
                <p className="font-medium">User Id</p>
                <p>rafin</p>
              </div>
              <div className="mt-2">
                <p className="font-medium">Password</p>
                <p>123456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
