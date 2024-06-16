import { NavLink } from "react-router-dom";

interface NavItemProps {
  path: string;
  name: string;
  isActive?: boolean;
}

const NavItem = ({ path, name }: NavItemProps) => {
  return (
    <NavLink
      to={path}
      className="rounded-md border border-gray-600 px-2.5 py-0.5 text-base font-semibold text-[#222]"
    >
      {name}
    </NavLink>
  );
};

export default NavItem;
