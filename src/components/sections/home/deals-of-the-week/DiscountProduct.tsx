import { HiPlus, HiMinus } from "react-icons/hi";
import { BsLightningFill } from "react-icons/bs";
import { Product } from "data/products";
import { useContext } from "react";
import { CartContext } from "context/CartContextProvider";

interface ProductProps {
  product: Product;
}

const DiscountProduct = ({ product }: ProductProps) => {
  const { state, dispatch } = useContext(CartContext)!;

  const cartItem = state.cartItems.find((elem) => elem.id === product.id);
  const addedToCart = cartItem !== undefined ? true : false;

  const handleAddToCart = () => {
    dispatch({ type: "ADD_PRODUCT", payload: { ...product, quantity: 1 } });
  };

  const handleIncrement = () => {
    if (cartItem) {
      dispatch({
        type: "CONTROL_QUANTITY",
        payload: { ...product, quantity: cartItem.quantity + 1 },
      });
    }
  };

  const handleDecrement = () => {
    if (cartItem) {
      if (cartItem.quantity <= 1) {
        dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
      } else {
        dispatch({
          type: "CONTROL_QUANTITY",
          payload: { ...product, quantity: cartItem.quantity - 1 },
        });
      }
    }
  };

  return (
    <div className="relative h-[360px] w-full overflow-hidden border border-s-0 border-t-0 border-[silver] p-[0.2rem]">
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

        {!addedToCart ? (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-0 left-0 z-40 flex h-10 w-full items-center justify-center gap-1 rounded-sm bg-[#153535] text-[1.1rem] font-medium text-[orange] outline-none"
          >
            <BsLightningFill />
            <span>Add To Cart</span>
          </button>
        ) : (
          <div className="absolute bottom-0 right-0 flex w-full items-end justify-between gap-3">
            <button className="h-10 flex-grow rounded-sm bg-[#153535] text-[1.1rem] font-medium text-[orange] outline-none">
              Added
            </button>
            <div className="flex h-10 items-center justify-center rounded-sm bg-[#eee]">
              <button
                onClick={handleDecrement}
                className="flex h-full w-10 items-center justify-center rounded-sm border-none outline-none"
              >
                <HiMinus className="text-[1.2rem] text-[#153535]" />
              </button>
              <span className="flex h-full w-11 items-center justify-center border-x border-[#ccc] text-center text-[1.2rem] font-bold text-[#153535]">
                {cartItem?.quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="flex h-full w-10 items-center justify-center rounded-sm border-none outline-none"
              >
                <HiPlus className="text-[1.2rem] text-[#153535]" />
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="box-shadow-md absolute left-0 top-5 rounded-r-[0.1rem] bg-[orange] px-3 py-1 text-[1.1rem] font-bold">
        10% off
      </p>
    </div>
  );
};

export default DiscountProduct;
