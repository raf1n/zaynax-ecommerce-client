import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log(product);

  const calculatePrice = (price, discount) => {
    return price - (price * discount) / 100;
  };

  return (
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
  );
};

export default ProductCard;
