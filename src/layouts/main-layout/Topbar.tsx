import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="pt-3 h-auto w-full bg-[#153535] font-nunito">
      <div className="mx-auto px-2 text-white flex justify-center md:justify-between max-w-[1420px]">
        <p className="hidden lg:block text-base font-medium">
          Need Help? Call Us:{" "}
          <span className="text-[orange] font-bold">+88 01234567890</span>
        </p>
        <p className="hidden md:block text-base font-medium">
          Get <span className="text-[orange] font-bold">30% off</span> for first
          order with exciting gift box!{" "}
          <Link to="/groceries/offers" className="underline">
            Learn more
          </Link>
        </p>

        {/* topbar links */}
        <div className="flex items-center gap-3">
          <Link to="/user/login" className="text-white font-medium">
            Login
          </Link>
          <span>|</span>
          <Link to="/user/register" className="text-white font-medium">
            Register
          </Link>
          <span>|</span>
          <Link to="/about" className="text-white font-medium">
            About Us
          </Link>
          <span>|</span>
          <Link to="/help" className="text-white font-medium">
            Help
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
