import { useGetAllActiveProductsQuery } from "../../feature/product/productApiSlice";
import ProductCard from "../../Components/Cards/ProductCard";
import { useSelector } from "react-redux";

const Homepage = () => {
  const searchTerm = useSelector((state) => state?.search?.searchString);

  const { data, isLoading } = useGetAllActiveProductsQuery({ searchTerm });

  if (isLoading)
    return (
      <div className=" w-10 mx-auto h-10 border-4 border-primary border-dashed rounded-full animate-spin "></div>
    );

  return (
    <div className="px-10 py-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 lg:gap-x-0 gap-y-10">
        {data?.data?.map((product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
