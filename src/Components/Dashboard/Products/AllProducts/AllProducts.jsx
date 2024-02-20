import { useGetAllProductsQuery } from "../../../../feature/product/productApiSlice";
import ProductCard from "../../../Cards/ProductCard";

const AllProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery({});

  if (isLoading)
    return (
      <div className=" w-10 mx-auto h-10 border-4 border-primary border-dashed rounded-full animate-spin "></div>
    );

  return (
    <div>
      <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
        {data?.data?.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
