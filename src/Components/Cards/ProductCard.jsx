import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../feature/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const calculatePrice = (price, discount) => {
    return price - (price * discount) / 100;
  };

  const user = useSelector((state) => state.auth.user);

  return (
    <>
      {user?.user_id ? (
        <Link to={`/dashboard/products/update/${product?._id}`}>
          <div className="flex justify-center items-center">
            <div className="px-4 py-4 bg-white rounded-md shadow-lg ">
              <img
                className="w-56  object-cover rounded-md"
                src={product?.image}
                alt=""
              />
              <div className="mt-4">
                <h1 className="text-base font-semibold text-gray-500">
                  {product?.name}
                </h1>
              </div>
              <div className="flex justify-between items-center mt-6">
                <p className="text-xl font-semibold text-gray-700">
                  BDT. {calculatePrice(product?.price, product?.discount)}
                </p>
                <p className="text-base bg-primary  flex items-center justify-center border px-2 font-semibold text-gray-700 rounded">
                  {product?.discount}%
                </p>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div className="flex justify-center items-center">
          <div className="relative group hover:bg-white ">
            <div className="px-4 py-4 bg-white rounded-md shadow-lg ">
              <div className="group-hover:opacity-0 transition duration-300 ease-in-out group-hover:bg-white ">
                <img
                  className="w-56 object-cover rounded-md"
                  src={product?.image}
                  alt=""
                />
                <div className="mt-4">
                  <h1 className="text-base font-semibold text-gray-500">
                    {product?.name}
                  </h1>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <p className="text-xl font-semibold text-gray-700">
                    BDT. {calculatePrice(product?.price, product?.discount)}
                  </p>
                  <p className="text-base bg-primary flex items-center justify-center border px-2 font-semibold text-gray-700 rounded">
                    {product?.discount}%
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center rounded-full py-2 px-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
