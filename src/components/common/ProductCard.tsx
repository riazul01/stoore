import { HiPlus, HiMinus } from "react-icons/hi";
import { BsLightningFill } from "react-icons/bs";
import { Product } from "data/products";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  const active = true;

  return (
    <div className="relative h-[360px] w-full max-w-[280px] overflow-hidden rounded-md border border-gray-200 p-[0.2rem] shadow-lg">
      <div className="relative h-[55%] w-full cursor-pointer overflow-hidden rounded-sm">
        <img
          src={product.image}
          className="h-full w-full object-cover"
          alt={`${product.name}_image`}
        />
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[#23232380] opacity-0 transition-all duration-300 ease-in-out hover:opacity-100">
          <p className="text-xl text-white">View Details</p>
        </div>
      </div>

      {/* product desc */}
      <div className="relative h-[45%] w-full p-2">
        <h1 className="text-lg font-bold text-[#0c2a2b]">{product.name}</h1>
        <p className="pt-2 text-base font-medium">
          {product.weight} {product.unit}
        </p>
        <p className="pt-2">
          <ins className="mr-1.5 text-[1.1rem] font-bold text-[#0c2a2b] no-underline">
            ${product.price}
          </ins>
          <del className="text-[1.1rem] font-bold text-[#888]">
            ${product.price}
          </del>
        </p>
        {!active && (
          <button className="absolute bottom-0 left-0 z-40 flex w-full items-center justify-center gap-1 rounded-sm bg-[#153535] h-10 text-[1.1rem] font-medium text-[orange] outline-none">
            <BsLightningFill />
            <span>Add To Cart</span>
          </button>
        )}
        {active && <div className="absolute bottom-0 right-0 flex w-full items-end justify-between gap-3">
          <button className="flex-grow rounded-sm bg-[#153535] h-10 text-[1.1rem] font-medium text-[orange] outline-none">
            Added
          </button>
          <div className="flex h-10 items-center justify-center rounded-sm bg-[#eee]">
            <button className="flex h-full w-10 items-center justify-center rounded-sm border-none outline-none">
              <HiMinus className="text-[1.2rem] text-[#153535]" />
            </button>
            <span className="flex h-full w-11 items-center justify-center border-x border-[#ccc] text-center text-[1.2rem] font-bold text-[#153535]">
              1
            </span>
            <button className="flex h-full w-10 items-center justify-center rounded-sm border-none outline-none">
              <HiPlus className="text-[1.2rem] text-[#153535]" />
            </button>
          </div>
        </div>}
      </div>

      <p className="box-shadow-md absolute left-0 top-5 rounded-r-[0.1rem] bg-[orange] px-3 py-1 text-[1.1rem] font-bold">
        10% off
      </p>
    </div>
  );
};

export default ProductCard;
