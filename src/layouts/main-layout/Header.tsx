import { BiSearchAlt } from "react-icons/bi";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { FiPhoneCall, FiUser } from "react-icons/fi";
import { LuClock4 } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* header */}
      <div className="sticky top-0 z-50 w-full bg-[#153535]">
        <div className="mx-[auto] flex max-w-[1420px] items-center justify-between px-[0.4rem] py-[1.2rem] sm:py-[1.6rem]">
          {/* logo */}
          <Link to="/" className="font-croissant text-[2rem] text-[orange]">
            Grocery
          </Link>

          {/* search bar */}
          <div className="flex h-11 items-center justify-center overflow-hidden rounded-lg">
            {/* select category */}
            <select
              name="category"
              className="w-35 h-full rounded-l-lg border-2 border-[#214445] bg-[#153535] pl-2.5 text-lg text-white outline-none"
            >
              <option value="all">All</option>
              <option value="raw-products">Raw Products</option>
              <option value="beverages">Beverages</option>
            </select>

            {/* search input */}
            <input
              name="searchText"
              className="h-full w-[22rem] border-y-2 border-[#214445] bg-transparent pl-4 text-lg text-white outline-none"
              type="text"
              placeholder="Search products..."
            />

            {/* search button */}
            <div className="flex h-full w-14 cursor-pointer items-center justify-center bg-[#214445]">
              <BiSearchAlt className="text-[1.625rem] text-white" />
            </div>
          </div>

          {/* working hours */}
          <div className="flex items-center gap-3">
            <LuClock4 className="text-xl text-white" />
            <div className="">
              <p className="text-4 font-semibold text-white">
                Sunday - Thursday
              </p>
              <p className="text-4 text-white">9:00 AM - 10:00 PM</p>
            </div>
          </div>

          {/* icon links */}
          <div className="flex items-center gap-5">
            <a href="tel:+8801234567890">
              <FiPhoneCall className="cursor-pointer text-2xl text-[orange]" />
            </a>

            <Link className="relative" to="#">
              <PiShoppingCartDuotone className="cursor-pointer text-[1.625rem] text-[orange]" />
              {
                <div className="absolute -right-3 -top-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-[orange]">
                  <p className="text-sm font-semibold text-white">2</p>
                </div>
              }
            </Link>

            <Link to="#">
              <FiUser className="cursor-pointer text-[1.625rem] text-[orange]" />
            </Link>

            <div className="z-50 grid h-8 w-auto cursor-pointer place-items-center rounded-sm">
              <span className="relative h-[0.15rem] w-[1.875rem] bg-[orange] before:absolute before:-top-[0.65rem] before:left-0 before:h-[0.15rem] before:w-[1.875rem] before:bg-[orange] before:content-[''] after:absolute after:left-0 after:top-[0.65rem] after:h-[0.15rem] after:w-[1.875rem] after:bg-[orange] after:content-['']"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
