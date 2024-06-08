import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="w-full bg-[#153535]">
      <div className="mx-auto flex max-w-[1420px] justify-between px-2 pt-3 text-white">
        <p className="hidden text-base font-medium lg:block">
          Need Help? Call Us:{" "}
          <span className="font-bold text-[orange]">+88 01234567890</span>
        </p>
        <p className="hidden text-base font-medium md:block">
          Get <span className="font-bold text-[orange]">30% off</span> for first
          order with exciting gift box!{" "}
          <Link to="#" className="underline">
            Learn more
          </Link>
        </p>

        {/* topbar links */}
        <div className="flex items-center gap-3">
          <Link to="#" className="font-medium text-white">
            Login
          </Link>
          <span>|</span>
          <Link to="#" className="font-medium text-white">
            Register
          </Link>
          <span>|</span>
          <Link to="#" className="font-medium text-white">
            About Us
          </Link>
          <span>|</span>
          <Link to="#" className="font-medium text-white">
            Help
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
