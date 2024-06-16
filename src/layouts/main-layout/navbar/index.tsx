import { useLocation } from "react-router-dom";
import navItems from "data/navItems";
import NavItem from "./NavItem";

const Navbar = () => {
  const pathAra = useLocation().pathname.split("/");
  const childItems =
    pathAra[2] === "beverages"
      ? navItems.find((item) => item.id === "beverages")
      : navItems.find((item) => item.id === "raw-products");

  return (
    <div className="flex items-center justify-between py-5">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {navItems.map((item) => (
          <NavItem key={item.id} path={item.path} name={item.subheader} />
        ))}
        {childItems?.items?.map((item) => (
          <NavItem key={item.name} path={item.path} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
