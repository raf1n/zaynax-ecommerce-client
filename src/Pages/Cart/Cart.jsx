import { Link } from "react-router-dom";
import CartItems from "../../Components/Cart/CartItems";

const Cart = () => {
  return (
    <div className="px-10 py-5">
      <div className="inline-block ml-5">
        <Link
          to="/"
          type="submit"
          className="bg-white font-medium w-full text-black px-10 py-3 shadow-md rounded-3xl focus:outline-none"
        >
          Go Back
        </Link>
      </div>

      <div className="mt-5 ml-5">
        <CartItems />
      </div>
    </div>
  );
};

export default Cart;
