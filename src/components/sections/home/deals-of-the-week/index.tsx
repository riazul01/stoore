import { ProductsContext } from "context/ProductsContextProvider";
import { useContext } from "react";
import ProductCard from "components/common/ProductCard";

const DealsOfTheWeek = () => {
    const { products } = useContext(ProductsContext)!;

  return (
    <div className="">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl font-bold">Deals of the Week</h1>
          <p className="text-base">Grab exclusive offers before they're gone</p>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex h-16 w-20 flex-col items-center justify-center rounded-sm bg-red-600">
            <p className="text-xl font-bold text-white">00</p>
            <span className="text-sm text-white">days</span>
          </div>
          <div className="flex h-16 w-20 flex-col items-center justify-center rounded-sm bg-red-600">
            <p className="text-xl font-bold text-white">00</p>
            <span className="text-sm text-white">hours</span>
          </div>
          <div className="flex h-16 w-20 flex-col items-center justify-center rounded-sm bg-red-600">
            <p className="text-xl font-bold text-white">00</p>
            <span className="text-sm text-white">minutes</span>
          </div>
          <div className="flex h-16 w-20 flex-col items-center justify-center rounded-sm bg-red-600">
            <p className="text-xl font-bold text-white">00</p>
            <span className="text-sm text-white">seconds</span>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 border border-b-0 border-e-0 border-[silver]">
        {products.slice(0, 12).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DealsOfTheWeek;
