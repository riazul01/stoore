import { Link, NavLink, useLocation } from "react-router-dom";

// icons
import { MdKeyboardArrowRight } from "react-icons/md";

const Sidebar = () => {
  const pathAra = useLocation().pathname.split("/").reverse();

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`fixed left-0 top-0 z-[99999] h-[100vh] w-[300px] -translate-x-[100%] bg-[#122829] px-[1.4rem] py-[1rem] transition-transform duration-300`}
    >
      <div className="">
        <Link
          to="/"
          className="px-[0.8rem] text-[2rem] text-[orange]"
          style={{ fontFamily: "Croissant One" }}
        >
          Grocery
        </Link>
        <ul className="my-[1rem]">
          <NavLink
            to="/"
            className={`${pathAra[0] === "" ? "bg-[#173334]" : null} flex items-center rounded-lg px-[0.8rem] py-[0.4rem] text-[1.1rem] text-[#fff] hover:bg-[#173334]`}
          >
            {pathAra[0] === "" && (
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
            )}
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/groceries"
            className={`${pathAra[0] === "groceries" ? "bg-[#173334]" : null} flex items-center rounded-lg px-[0.8rem] py-[0.4rem] text-[1.1rem] text-[#fff] hover:bg-[#173334]`}
          >
            {pathAra[0] === "groceries" && (
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
            )}
            <span>Groceries</span>
          </NavLink>
          <NavLink
            to="/groceries/trending"
            className={`${pathAra[0] === "trending" || pathAra[1] === "trending" ? "bg-[#173334]" : null} flex items-center rounded-lg px-[0.8rem] py-[0.4rem] text-[1.1rem] text-[#fff] hover:bg-[#173334]`}
          >
            {(pathAra[0] === "trending" || pathAra[1] === "trending") && (
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
            )}
            <span>Trending now</span>
          </NavLink>
          <NavLink
            to="/groceries/raw-products"
            className={`${pathAra[0] === "raw-products" || pathAra[1] === "raw-products" ? "bg-[#173334]" : null} flex items-center rounded-lg px-[0.8rem] py-[0.4rem] text-[1.1rem] text-[#fff] hover:bg-[#173334]`}
          >
            {(pathAra[0] === "raw-products" ||
              pathAra[1] === "raw-products") && (
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
            )}
            <span>Raw Products</span>
          </NavLink>
          <NavLink
            to="/groceries/beverages"
            className={`${pathAra[0] === "beverages" || pathAra[1] === "beverages" ? "bg-[#173334]" : null} flex items-center rounded-lg px-[0.8rem] py-[0.4rem] text-[1.1rem] text-[#fff] hover:bg-[#173334]`}
          >
            {(pathAra[0] === "beverages" || pathAra[1] === "beverages") && (
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
            )}
            <span>Beverages</span>
          </NavLink>
          <NavLink
            to="/groceries/offers"
            className={`${pathAra[0] === "offers" ? "bg-[#173334]" : null} flex items-center rounded-lg px-[0.8rem] py-[0.4rem] text-[1.1rem] text-[#fff] hover:bg-[#173334]`}
          >
            {pathAra[0] === "offers" && (
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
            )}
            <span>New Offers</span>
          </NavLink>
          <NavLink
            to="/cart"
            className={`${pathAra[0] === "cart" || pathAra[0] === "checkout" || pathAra[0] === "payment" || pathAra[0] === "empty-cart" ? "bg-[#173334]" : null} flex items-center rounded-lg px-[0.8rem] py-[0.4rem] text-[1.1rem] text-[#fff] hover:bg-[#173334]`}
          >
            {(pathAra[0] === "cart" ||
              pathAra[0] === "checkout" ||
              pathAra[0] === "payment" ||
              pathAra[0] === "empty-cart") && (
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
            )}
            <span>Cart Items</span>
            <div className="ms-[0.4rem] flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-[50%] bg-[orange]">
              <p className="text-[0.8rem] font-bold text-[#fff]">2</p>
            </div>
          </NavLink>
          <NavLink
            to="/user/profile"
            className={`${pathAra[1] === "user" && pathAra[0] !== "orders" ? "bg-[#173334]" : null} flex items-center rounded-lg px-[0.8rem] py-[0.4rem] text-[1.1rem] text-[#fff] hover:bg-[#173334]`}
          >
            {pathAra[1] === "user" && pathAra[0] !== "orders" && (
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
            )}
            <span>My Account</span>
          </NavLink>
          <NavLink
            to="/user/orders"
            className={`${pathAra[0] === "orders" || pathAra[1] === "orders" ? "bg-[#173334]" : null} flex items-center rounded-lg px-[0.8rem] py-[0.4rem] text-[1.1rem] text-[#fff] hover:bg-[#173334]`}
          >
            {(pathAra[0] === "orders" || pathAra[1] === "orders") && (
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
            )}
            <span>My Orders</span>
          </NavLink>
          <NavLink
            to="/about"
            className={`${pathAra[0] === "about" ? "bg-[#173334]" : null} flex items-center rounded-lg px-[0.8rem] py-[0.4rem] text-[1.1rem] text-[#fff] hover:bg-[#173334]`}
          >
            {pathAra[0] === "about" && (
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
            )}
            <span>About Us</span>
          </NavLink>
          <NavLink
            to="/help"
            className={`${pathAra[0] === "help" ? "bg-[#173334]" : null} flex items-center rounded-lg px-[0.8rem] py-[0.4rem] text-[1.1rem] text-[#fff] hover:bg-[#173334]`}
          >
            {pathAra[0] === "help" && (
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
            )}
            <span>Help</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
