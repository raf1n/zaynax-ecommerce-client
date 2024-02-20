import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../feature/cart/cartSlice";

const CartCard = ({ cart }) => {
  const dispatch = useDispatch();

  console.log(cart);

  // const [quantity, setQuantity] = useState(cart?.quantity ? cart?.quantity : 0);

  const handleIncrement = () => {
    dispatch(increaseQuantity(cart._id));
  };

  const handleDecrement = () => {
    dispatch(decreaseQuantity(cart._id));
  };

  const calculatePrice = (price, discount) => {
    return price - (price * discount) / 100;
  };

  const calculateTotalPrice = (price, discount, quantity) => {
    const unitPrice = calculatePrice(price, discount);
    return unitPrice * quantity;
  };

  return (
    <div className=" text-gray-700 rounded rounded-b-none bg-white border-b font-medium px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div>
          <img
            className="w-full h-full lg:w-24 lg:h-24 object-cover"
            src={cart?.image}
            alt="cartImage"
          />
        </div>
        <div className="w-full h-full">
          <div className="flex justify-between items-center">
            <div>
              <p>{cart?.name}</p>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => dispatch(removeFromCart(cart?._id))}
            >
              <RiDeleteBinLine size={20}></RiDeleteBinLine>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between mr-6">
            <div className="mt-4 space-y-1">
              <div className="flex items-center gap-4">
                <p>Color: {cart?.color}</p>
                <p>Size: {cart?.size}</p>
              </div>
              <div>
                <p>
                  Product Price: {calculatePrice(cart?.price, cart?.discount)}
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <div className="flex items-center gap-4">
                <p>Shipping Method: EMS</p>
              </div>
              <div>
                <p>Shipping Charge: BDT. {cart?.shippingCharge}</p>
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <div className="flex gap-2 items-center">
                <p> Quantity: </p>
                <div className="flex flex-row justify-between items-center w-[88px] h-7 rounded-full shadow bg-transparent text-gray-600 px-2">
                  <button
                    onClick={handleDecrement}
                    className="mb-1 h-full rounded-l cursor-pointer outline-none"
                  >
                    <span className=" text-xl ">−</span>
                  </button>
                  <p>{cart?.quantity}</p>
                  <button
                    onClick={handleIncrement}
                    className="mb-1 hover:text-gray-700 h-full rounded-r cursor-pointer"
                  >
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>
              <div>
                <p>
                  Total Price: BDT.{" "}
                  {calculateTotalPrice(
                    cart?.price,
                    cart?.discount,
                    cart?.quantity
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
