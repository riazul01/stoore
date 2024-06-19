import { ProductsContext } from "context/ProductsContextProvider";
import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopRated = () => {
  const { topProducts } = useContext(ProductsContext)!;

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold">Top Rated</h1>
      <div className="flex flex-col gap-4 py-3">
        {topProducts.slice(0, 6).map((product) => {
          return (
            <div className="flex gap-3">
              <div className="relative h-24 w-32 overflow-hidden rounded-sm">
                <img
                  src={product.image}
                  alt={`${product.name}_image`}
                  className="h-full w-full object-cover"
                />
                <p className="absolute -left-8 top-2.5 w-28 -rotate-45 transform rounded-sm bg-red-600 py-1 text-center text-xs text-white box-shadow-md">
                  -10% off
                </p>
              </div>
              <div className="-mt-0.5">
                <Link to={'#!'} className="text-base font-bold text-[#153535]">{product.name}</Link>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar key={index} className={`${index >= Math.round(product.rating) ? 'text-gray-300': 'text-[orange]'} text-base`} />
                  ))}
                  (4)
                </div>
                <p className="mt-0.5">
                  <ins className="mr-1.5 text-base font-bold text-[#0c2a2b] no-underline">
                    ${product.price}
                  </ins>
                  <del className="text-base font-bold text-[#888]">
                    ${product.price}
                  </del>
                </p>
                <p className="mt-0.5 text-sm text-[#333] font-semibold">In Stock</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRated;
