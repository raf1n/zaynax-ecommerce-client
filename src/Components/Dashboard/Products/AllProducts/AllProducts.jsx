import { useGetAllProductsQuery } from "../../../../feature/product/productApiSlice";
import ProductCard from "../../../Cards/ProductCard";

const AllProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery({});

  if (isLoading) return <div>Loading...</div>;

  console.log(data);
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
