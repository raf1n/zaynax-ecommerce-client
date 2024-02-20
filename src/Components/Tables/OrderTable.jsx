import {
  useGetAllOrdersQuery,
  useUpdateOrderMutation,
} from "../../feature/order/orderApiSlice";

const OrderTable = ({ selectedStatus }) => {
  let status;

  if (selectedStatus === "All") {
    status = "all";
  } else if (selectedStatus === "Pending") {
    status = "pending";
  } else if (selectedStatus === "Confirmed") {
    status = "confirmed";
  } else {
    status = "cancel";
  }

  const { data, isLoading } = useGetAllOrdersQuery({ status });

  const [updateOrder] = useUpdateOrderMutation({});

  // console.log(data);

  const handleUpdateStatus = async (status, orderId) => {
    // console.log(status);

    await updateOrder({ formData: { status }, orderId });

    // console.log(result);
  };
  if (isLoading)
    return (
      <div className="mt-10 w-10 mx-auto h-10 border-4 border-primary border-dashed rounded-full animate-spin "></div>
    );

  return (
    <div className="w-full mt-6">
      <div className="">
        <div className="overflow-auto lg:overflow-visible ">
          <table className="table-auto border-separate border-spacing-y-2 text-gray-700 text-base w-full">
            <thead className=" text-gray-500">
              <tr>
                <th className="p-3 text-left">SL</th>
                <th className="p-3 text-left">Order No</th>

                <th className="p-3 ">Price</th>

                <th className="p-3 ">Action</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((order, index) => (
                <tr
                  key={index}
                  className=" shadow-sm mb-10 bg-white rounded-md  font-medium"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{order?._id?.slice(0, 8)}</td>
                  <td className="p-3 text-center">
                    <span className="font-extrabold text-xs">৳ </span>
                    {order?.totalPrice}
                  </td>
                  <td className="p-3 text-center space-x-3">
                    {order?.status === "pending" && (
                      <>
                        <div className="inline-block">
                          <button
                            onClick={() =>
                              handleUpdateStatus("confirmed", order?._id)
                            }
                            className="bg-primary font-medium w-full text-black px-6 py-1  rounded-3xl focus:outline-none"
                          >
                            Confirm
                          </button>
                        </div>
                        <div className="inline-block">
                          <button
                            onClick={() =>
                              handleUpdateStatus("cancel", order?._id)
                            }
                            className="bg-red-400 font-medium w-full text-white px-6 py-1  rounded-3xl focus:outline-none"
                          >
                            Cancel
                          </button>
                        </div>
                      </>
                    )}
                  </td>
                  <td className="p-3 ">
                    <p>
                      {order?.status === "pending"
                        ? "Pending"
                        : order?.status === "confirmed"
                        ? "Confirmed"
                        : "Cancelled"}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
