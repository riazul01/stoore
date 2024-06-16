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
    <div className="flex items-center justify-between py-5">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <NavLink
          to="/"
          className="active rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
        >
          Home
        </NavLink>
        <NavLink
          to="#"
          className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
        >
          Groceries
        </NavLink>
        <NavLink
          to="#"
          className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
        >
          Raw Products
        </NavLink>
        <NavLink
          to="#"
          className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
        >
          Beverages
        </NavLink>
        {flag && (
          <NavLink
            to="#"
            className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Vegetables
          </NavLink>
        )}
        {flag && (
          <NavLink
            to="#"
            className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Fruits
          </NavLink>
        )}
        {flag && (
          <NavLink
            to="#"
            className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Meat
          </NavLink>
        )}
        {flag && (
          <NavLink
            to="#"
            className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Fish
          </NavLink>
        )}
        {flag && (
          <NavLink
            to="#"
            className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Eggs
          </NavLink>
        )}
        {flag && (
          <NavLink
            to="#"
            className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Spices
          </NavLink>
        )}
        {flag && (
          <NavLink
            to="#"
            className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Rice
          </NavLink>
        )}
        {flag && (
          <NavLink
            to="#"
            className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Flour
          </NavLink>
        )}
        {flag && (
          <NavLink
            to="#"
            className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Oil
          </NavLink>
        )}
        {!flag && (
          <NavLink
            to="#"
            className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Tea & Coffe
          </NavLink>
        )}
        {!flag && (
          <NavLink
            to="#"
            className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Dry Fruits
          </NavLink>
        )}
        {!flag && (
          <NavLink
            to="#"
            className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Jams & Jellies
          </NavLink>
        )}
        {!flag && (
          <NavLink
            to="#"
            className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Biscuits
          </NavLink>
        )}
        {!flag && (
          <NavLink
            to="#"
            className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Cakes
          </NavLink>
        )}
        {!flag && (
          <NavLink
            to="#"
            className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
          >
            Breads
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
