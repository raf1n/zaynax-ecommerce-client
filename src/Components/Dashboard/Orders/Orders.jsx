import { useState } from "react";
import OrderTable from "../../Tables/OrderTable";
import OrderStatus from "./OrderStatus/OrderStatus";

const Orders = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  console.log(selectedStatus);
  return (
    <div className="mx-10 mt-8">
      <OrderStatus
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      <OrderTable />
    </div>
  );
};

export default Orders;
