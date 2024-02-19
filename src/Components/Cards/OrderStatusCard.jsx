// OrderStatusCard component
const OrderStatusCard = ({ text, selectedStatus }) => {
  let statusClass = "";

  if (selectedStatus === text) {
    switch (text) {
      case "All":
        statusClass = "bg-primary text-black";
        break;
      case "Pending":
        statusClass = "bg-blue-500 text-white";
        break;
      case "Confirmed":
        statusClass = "bg-green-500 text-white";
        break;
      case "Cancelled":
        statusClass = "bg-red-600 text-white";
        break;
      default:
        statusClass = "bg-gray-700 text-white";
    }
  } else {
    statusClass = "bg-white text-black";
  }

  return (
    <div
      className={`shadow pl-4 pt-4 pr-36 text-start rounded-md pb-10 ${statusClass}`}
    >
      <div className="text-start">{text}</div>
    </div>
  );
};

export default OrderStatusCard;
