import OrderStatusCard from "../../../Cards/OrderStatusCard";

const OrderStatus = ({ setSelectedStatus, selectedStatus }) => {
  const statusCardData = [
    { text: "All" },
    { text: "Pending" },
    { text: "Confirmed" },
    { text: "Cancelled" },
  ];

  return (
    <div className="flex gap-10">
      {statusCardData.map((data, index) => (
        <div key={index} onClick={() => setSelectedStatus(data.text)}>
          <OrderStatusCard text={data.text} selectedStatus={selectedStatus} />
        </div>
      ))}
    </div>
  );
};

export default OrderStatus;
