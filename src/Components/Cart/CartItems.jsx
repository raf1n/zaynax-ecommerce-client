import { useState } from "react";
import CartCard from "../Cards/CartCard";
import OrderSummary from "./OrderSummary";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useCreateOrderMutation } from "../../feature/order/orderApiSlice";
import Modal from "../Shared/Modal";
import { FaCheckCircle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const CartItems = () => {
  const carts = useSelector((state) => state.cart?.cart);
  const user = useSelector((state) => state.auth?.user);

  const isLoggedIn = useAuth();

  const [createOrder, { isLoading }] = useCreateOrderMutation({});

  const [checked, setChecked] = useState(false);
  const [borderColor, setBorderColor] = useState("border-black");
  const [error, setError] = useState(false);

  const [modal, setModal] = useState(false);

  const [totalPrice, setTotalPrice] = useState(0);

  console.log(totalPrice);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    setBorderColor(checked ? "border-red-500" : "border-primary");
    setError(false);
  };

  const handleCheckout = async () => {
    if (!checked) {
      setError(true);
      setBorderColor("border-red-500");
    } else if (!isLoggedIn) {
      setModal(true);
    } else {
      const transformProducts = (products) => {
        return products.map((product) => ({
          productId: product._id,
          quantity: product.quantity,
        }));
      };

      const transformedProducts = transformProducts(carts);

      const result = await createOrder({
        formData: {
          totalPrice,
          userId: user?._id,
          products: transformedProducts,
        },
      });
      console.log(result?.data?.success);

      if (result?.data?.success) {
        setModal(true);
      }
    }
  };

  // if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex lg:flex-row flex-col justify-between gap-4">
      {carts?.length === 0 ? (
        <div className="mx-auto text-xl font-medium">
          <div>No items in the cart.</div>
          <div>
            <Link className="text-blue-500 mx-auto rounded-md" to="/">
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-full lg:w-[80%] ">
          <div className="rounded-lg shadow-sm">
            {carts?.map((cart) => (
              <CartCard key={cart?._id} cart={cart} />
            ))}

            <div className="bg-white rounded-b flex flex-col lg:flex-row  justify-between items-center py-2 relative">
              {error && (
                <p className="text-xs font-medium text-red-500 absolute top-2 left-12">
                  You must agree to the terms and conditions
                </p>
              )}
              <label className="flex items-center gap-2 px-4 py-4 cursor-pointer">
                <div
                  className={`border-2 rounded-full flex items-center justify-center p-0.5 ${borderColor}`}
                >
                  <input
                    onClick={handleCheckboxChange}
                    className="appearance-none w-3 h-3 rounded-full checked:bg-primary focus:outline-none mx-auto my-auto focus:ring-yellow-500"
                    type="checkbox"
                    checked={checked}
                  />
                </div>
                <div className="font-medium mb-1 select-none">
                  I agree to the Terms and Conditions, Privacy Policy & Refund
                  Policy.
                </div>
              </label>
              <div className="inline-block mr-5">
                <button
                  onClick={handleCheckout}
                  type="submit"
                  className="bg-primary font-medium w-full text-black px-14 py-2 shadow-md rounded focus:outline-none flex gap-1"
                >
                  <span>CHECKOUT</span>
                  {isLoading && (
                    <div className=" w-6 h-6 border-4 border-white border-dashed rounded-full animate-spin "></div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full lg:w-[20%]">
        <OrderSummary setTotalPrice={setTotalPrice} carts={carts} />
      </div>

      <Modal setShowModal={setModal} showModal={modal}>
        {!isLoggedIn ? (
          <div className="w-full bg-white p-4 flex flex-col items-center px-10 py-4">
            <p className="text-lg mt-5 text-gray-500">Please Sign up to</p>
            <p className="text-lg text-gray-500">Checkout</p>
          </div>
        ) : (
          <div className="w-full bg-white p-4 flex flex-col items-center px-10 py-4">
            <FaCheckCircle size={30} />

            <p className="text-lg mt-5 text-gray-500">Your Order Placed</p>
            <p className="text-lg text-gray-500">successfully </p>
            <div className="inline-block mr-5 mt-4">
              <Link
                to={"/dashboard"}
                className="bg-primary font-medium w-full text-black px-10 py-2 shadow-md rounded-full focus:outline-none"
              >
                Go to Admin Panel
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CartItems;
