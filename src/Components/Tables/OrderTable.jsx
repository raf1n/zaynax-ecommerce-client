const OrderTable = () => {
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
              <tr className=" shadow-sm mb-10 bg-white rounded-md  font-medium">
                <td className="p-3">1</td>
                <td className="p-3">Technology</td>
                <td className="p-3 text-center">200.00$</td>
                <td className="p-3 text-center space-x-3">
                  <div className="inline-block">
                    <button className="bg-primary font-medium w-full text-black px-6 py-1  rounded-3xl focus:outline-none">
                      Confirm
                    </button>
                  </div>
                  <div className="inline-block">
                    <button className="bg-red-400 font-medium w-full text-white px-6 py-1  rounded-3xl focus:outline-none">
                      Cancel
                    </button>
                  </div>
                </td>
                <td className="p-3 ">
                  <p>Confirmed</p>
                </td>
              </tr>
              <tr className=" shadow-sm mb-10 bg-white rounded-md  font-medium">
                <td className="p-3">1</td>
                <td className="p-3">Technology</td>
                <td className="p-3 text-center">200.00$</td>
                <td className="p-3 text-center space-x-3">
                  <div className="inline-block">
                    <button className="bg-primary font-medium w-full text-black px-6 py-1  rounded-3xl focus:outline-none">
                      Confirm
                    </button>
                  </div>
                  <div className="inline-block">
                    <button className="bg-red-400 font-medium w-full text-white px-6 py-1  rounded-3xl focus:outline-none">
                      Cancel
                    </button>
                  </div>
                </td>
                <td className="p-3 ">
                  <p>Confirmed</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
