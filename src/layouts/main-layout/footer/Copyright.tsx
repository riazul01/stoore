import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div className="flex items-center justify-between border-t border-[#153535] py-4">
      <p className="text-xs uppercase text-[#ddd]">
        Created by{" "}
        <a
          className="text-[orange]"
          href="https://github.com/riazul01"
          target="_blank"
          rel="noreferrer"
        >
          riazul01
        </a>{" "}
        | &copy; 2024 - All Rights Reserved
      </p>
      <div className="flex items-center justify-center gap-3">
        <Link to="#!" className="text-xs uppercase text-[#ddd]">
          Terms of use
        </Link>
        <Link to="#!" className="text-xs uppercase text-[#ddd]">
          Privacy policy
        </Link>
      </div>
    </div>
  );
};

export default Copyright;
