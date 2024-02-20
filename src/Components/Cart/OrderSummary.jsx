import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useValidatePromoCodeMutation } from "../../feature/promotion/promotionApiSlice";

const OrderSummaryItem = ({ label, amount }) => {
  return (
    <div className="flex justify-between px-5 py-1">
      <p className="text-gray-700">{label}</p>
      <p className="text-gray-700">
        <span className="font-extrabold text-xs">৳ </span> {amount}
      </p>
    </div>
  );
};

const OrderSummary = ({ carts, setTotalPrice }) => {
  const isLoggedIn = useAuth(); // Get the logged in user details

  const [promoCode, setPromoCode] = useState("");

  const [shippingCharge, setShippingCharge] = useState(100);

  const [inputFocused, setInputFocused] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0); // State to store the discount amount
  const navigate = useNavigate();

  const [validatePromoCode, { isLoading, isError, data }] =
    useValidatePromoCodeMutation(); // Use the mutation hook

  console.log(data);

  const handleInputFocus = () => {
    if (!isLoggedIn) {
      navigate("/register");
    } else {
      setInputFocused(true);
    }
  };

  const handleApplyPromoCode = async () => {
    if (!promoCode) {
      return;
    }
    await validatePromoCode({ promoCode }); // Call the mutation with the promo code
  };

  const handleRedirectToRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    if (data && data?.data?.valid) {
      setCouponDiscount(data?.data?.promotion?.discount);
    } else {
      setCouponDiscount(0);
    }
  }, [data]);

  const calculatePrice = (price, discount) => {
    return price - (price * discount) / 100;
  };

  const calculateTotalPrice = () => {
    let subtotal = 0;

    carts?.forEach((cart) => {
      subtotal += calculatePrice(cart?.price, cart?.discount) * cart?.quantity;
    });

    subtotal += shippingCharge;

    const couponDiscountAmount = (subtotal * couponDiscount) / 100;

    const totalPayable = subtotal - couponDiscountAmount + shippingCharge;
    setTotalPrice(totalPayable);

    return {
      totalPayable,
      subTotalBeforeDiscount: subtotal,
      couponDiscountAmount,
    };
  };

  const { totalPayable, subTotalBeforeDiscount, couponDiscountAmount } =
    calculateTotalPrice();

  return (
    <div className="rounded-md border bg-white text-gray-700 font-medium">
      <div className="border-b border-gray-200">
        <h1 className="text-base text-center my-2">ORDER SUMMARY</h1>
      </div>

      <div className="mb-4 border-dashed border-b pb-2">
        <OrderSummaryItem
          label={`Subtotal (${carts?.length} Items)`}
          amount={subTotalBeforeDiscount}
        />
        <OrderSummaryItem label="Discount" amount={couponDiscountAmount} />
        <OrderSummaryItem label="Shipping Charge" amount={shippingCharge} />
        <OrderSummaryItem label="Wallet Debit" amount="0" />
      </div>

      <div className="border-dashed border-b">
        <div className="flex items-center justify-center b">
          <div className="flex items-center border rounded mb-3 mx-2">
            <input
              onFocus={handleInputFocus}
              onChange={(e) => setPromoCode(e.target.value)}
              type="text"
              placeholder="Type your code"
              className="px-1 py-1 pl-3 border-gray-300 rounded-l focus:outline-none"
            />
            <button
              disabled={!inputFocused}
              onClick={
                isLoggedIn ? handleApplyPromoCode : handleRedirectToRegister
              }
              className="px-3 py-2 bg-gray-100 text-gray-500 text-sm font-normal"
            >
              Apply
            </button>
          </div>
        </div>
        {!data?.data?.valid && (
          <p className="text-xs text-red-600 text-center mb-2">
            {data?.message}
          </p>
        )}
      </div>

      <div className="flex justify-between px-5 py-1 my-2">
        <p className="text-gray-700">Total Payable</p>
        <p className="text-gray-700">
          <span className="font-extrabold text-xs">৳ </span>{" "}
          {totalPayable ? totalPayable : 0}
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
