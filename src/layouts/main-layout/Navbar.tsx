import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const path = useLocation().pathname.split("/");

  let flag = true;

  // switch raw-products and beverages links
  if (
    path[path.length - 1] === "raw-products" ||
    path[path.length - 2] === "raw-products"
  ) {
    flag = true;
  } else if (
    path[path.length - 1] === "beverages" ||
    path[path.length - 2] === "beverages"
  ) {
    flag = false;
  }

  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-[1420px] items-center justify-between px-1.5 py-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <NavLink
            to="/"
            className="navLink active rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Home
          </NavLink>
          <NavLink
            to="/groceries"
            className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Groceries
          </NavLink>
          <NavLink
            to="/groceries/raw-products"
            className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Raw Products
          </NavLink>
          <NavLink
            to="/groceries/beverages"
            className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Beverages
          </NavLink>
          {flag && (
            <NavLink
              to="/groceries/raw-products/vegetables"
              className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
            >
              Vegetables
            </NavLink>
          )}
          {flag && (
            <NavLink
              to="/groceries/raw-products/fruits"
              className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
            >
              Fruits
            </NavLink>
          )}
          {flag && (
            <NavLink
              to="/groceries/raw-products/meat"
              className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
            >
              Meat
            </NavLink>
          )}
          {flag && (
            <NavLink
              to="/groceries/raw-products/fish"
              className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
            >
              Fish
            </NavLink>
          )}
          {flag && (
            <NavLink
              to="/groceries/raw-products/eggs"
              className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
            >
              Eggs
            </NavLink>
          )}
          {flag && (
            <NavLink
              to="/groceries/raw-products/spices"
              className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
            >
              Spices
            </NavLink>
          )}
          {flag && (
            <NavLink
              to="/groceries/raw-products/rice"
              className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
            >
              Rice
            </NavLink>
          )}
          {flag && (
            <NavLink
              to="/groceries/raw-products/flour"
              className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
            >
              Flour
            </NavLink>
          )}
          {flag && (
            <NavLink
              to="/groceries/raw-products/oil"
              className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
            >
              Oil
            </NavLink>
          )}
          {!flag && (
            <NavLink
              to="/groceries/beverages/tea-coffe"
              className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
            >
              Tea & Coffe
            </NavLink>
          )}
          {!flag && (
            <NavLink
              to="/groceries/beverages/dry-fruits"
              className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
            >
              Dry Fruits
            </NavLink>
          )}
          {!flag && (
            <NavLink
              to="/groceries/beverages/jams"
              className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
            >
              Jams & Jellies
            </NavLink>
          )}
          {!flag && (
            <NavLink
              to="/groceries/beverages/biscuits"
              className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
            >
              Biscuits
            </NavLink>
          )}
          {!flag && (
            <NavLink
              to="/groceries/beverages/cakes"
              className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
            >
              Cakes
            </NavLink>
          )}
          {!flag && (
            <NavLink
              to="/groceries/beverages/breads"
              className="navLink rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
            >
              Breads
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
