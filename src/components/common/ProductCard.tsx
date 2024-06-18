// import { HiPlus, HiMinus } from "react-icons/hi";
// import { BsLightningFill } from "react-icons/bs";
import { Product } from "data/products";
import { BsLightningFill } from "react-icons/bs";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="relative h-[360px] w-full max-w-[280px] overflow-hidden rounded-md border border-gray-200 p-[0.2rem] shadow-lg">
      <div className="relative h-[55%] w-full cursor-pointer overflow-hidden rounded-sm">
        <img
          src={product.image}
          className="h-full w-full object-cover"
          alt="product_image"
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
        <button className="absolute bottom-0 left-0 z-40 flex w-full items-center justify-center gap-1 rounded-sm bg-[#153535] py-2 text-[1.1rem] font-medium text-[orange] outline-none">
          <BsLightningFill />
          <span>Add To Cart</span>
        </button>
        {/* <div className={`absolute right-0 bottom-0 flex items-center`}>
                    <button className="px-[0.7rem] py-[0.62rem] border-none outline-none bg-[#222] rounded-sm"><HiMinus className="text-white text-[1.2rem]"/></button>
                    <span className="text-[1.2rem] text-center font-bold w-[2.5rem]">0</span>
                    <button className="px-[0.7rem] py-[0.62rem] border-none outline-none bg-[#222] rounded-sm"><HiPlus className="text-white text-[1.2rem]"/></button>
                </div> */}
      </div>

      <p
        className="absolute left-0 top-5 rounded-r-[0.1rem] bg-[orange] px-3 py-1 text-[1.1rem] font-bold"
        style={{ boxShadow: "0.015rem 0.015rem 0.5rem 0 #222" }}
      >
        10% off
      </p>
    </div>
  );
};

export default ProductCard;
