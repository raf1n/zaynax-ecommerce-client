import { Link } from "react-router-dom";
import AllProducts from "./AllProducts";

const Products = () => {
  return (
    <div className="px-10 py-5">
      <div className="inline-block ml-5">
        <Link
          to="/dashboard/products/add-product"
          type="submit"
          className="bg-white font-medium w-full text-black px-10 py-3 shadow-md rounded-3xl focus:outline-none"
        >
          Add New Product
        </Link>
      </div>
      <div className="mt-5">
        <AllProducts />
      </div>
    </div>
  );
};

export default Products;
