import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="flex justify-between pt-3 text-white">
      <p className="text-base font-medium">
        Need Help? Call Us:{" "}
        <span className="font-bold text-[orange]">+88 01234567890</span>
      </p>
      <p className="text-base font-medium">
        Get <span className="font-bold text-[orange]">30% off</span> for first
        order with exciting gift box!{" "}
        <Link to="#!" className="underline">
          Learn more
        </Link>
      </p>

      {/* topbar links */}
      <div className="flex items-center gap-3">
        <Link to="#!" className="font-medium">
          Login
        </Link>
        <span>|</span>
        <Link to="#!" className="font-medium">
          Register
        </Link>
        <span>|</span>
        <Link to="#!" className="font-medium">
          About Us
        </Link>
        <span>|</span>
        <Link to="#!" className="font-medium">
          Help
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
