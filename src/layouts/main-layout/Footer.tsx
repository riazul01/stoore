import { Link } from "react-router-dom";

// images
import AppStoreBadge from "assets/images/badges/app-store.png";
import GooglePalyBadge from "assets/images/badges/google-play.png";

// icons
import { FaFacebookF } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="footer w-full bg-[#122829]">
        <div className="mx-[auto] flex h-auto max-w-[1420px] flex-wrap justify-between px-[0.4rem] pt-[2.6rem]">
          {/* footer column 01 */}
          <div className="w-full pb-[2.6rem] md:w-[50%] lg:w-[40%] xl:w-[28%] xl:pr-[1.8rem]">
            {/* brand */}
            <h1
              className="text-[1.8rem] text-[orange]"
              style={{ fontFamily: "Croissant One" }}
            >
              Grocery
            </h1>

            {/* subscribe */}
            <div className="">
              <p className="pb-[0.4rem] pt-[1rem] text-[1.1rem] font-[500] text-[#fff]">
                Stay updated with latest news
              </p>
              <div className="flex h-[40px] w-full max-w-[340px] items-center overflow-hidden rounded-lg border-[2px] border-[#d58b03] bg-[#d58b03]">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="h-full w-[67%] border-0 bg-[#fff] px-[0.8rem] text-[1.1rem] text-[#111] outline-none placeholder:text-[#666]"
                />
                <button className="h-full w-[33%] bg-[#d58b03] text-[1.1rem] font-[600] text-[#111]">
                  Subscribe
                </button>
              </div>
            </div>

            {/* social links */}
            <div className="mt-[1.6rem] flex items-center">
              <a
                href="#null"
                className="mr-[0.4rem] flex h-[2.6rem] w-[2.6rem] cursor-pointer items-center justify-center rounded-lg border-[1px] border-[#888]"
                title="facebook"
              >
                <FaFacebookF className="cursor-pointer text-[1.2rem] text-[#888]" />
              </a>
              <a
                href="#null"
                className="mr-[0.4rem] flex h-[2.6rem] w-[2.6rem] cursor-pointer items-center justify-center rounded-lg border-[1px] border-[#888]"
                title="instagram"
              >
                <BsInstagram className="cursor-pointer text-[1.2rem] text-[#888]" />
              </a>
              <a
                href="#null"
                className="mr-[0.4rem] flex h-[2.6rem] w-[2.6rem] cursor-pointer items-center justify-center rounded-lg border-[1px] border-[#888]"
                title="linkedin"
              >
                <BsLinkedin className="cursor-pointer text-[1.2rem] text-[#888]" />
              </a>
              <a
                href="#null"
                className="mr-[0.4rem] flex h-[2.6rem] w-[2.6rem] cursor-pointer items-center justify-center rounded-lg border-[1px] border-[#888]"
                title="twitter"
              >
                <BsTwitter className="cursor-pointer text-[1.2rem] text-[#888]" />
              </a>
              <a
                href="#null"
                className="mr-[0.4rem] flex h-[2.6rem] w-[2.6rem] cursor-pointer items-center justify-center rounded-lg border-[1px] border-[#888]"
                title="youtube"
              >
                <BsYoutube className="cursor-pointer text-[1.2rem] text-[#888]" />
              </a>
            </div>

            {/* mobile app links */}
            <div className="mt-[1.4rem] flex items-center">
              <a
                href="#null"
                title="google play"
                className="mr-[0.6rem] h-[2.6rem] w-[8.6rem]"
              >
                <img
                  src={GooglePalyBadge}
                  className="h-full w-full object-cover"
                  alt="google-play"
                />
              </a>
              <a
                href="#null"
                title="app store"
                className="h-[2.6rem] w-[7.8rem]"
              >
                <img
                  src={AppStoreBadge}
                  className="h-full w-full object-cover"
                  alt="google-play"
                />
              </a>
            </div>
          </div>

          {/* footer column 02 */}
          <div className="flex w-full flex-col pb-[2.4rem] md:w-[50%] lg:w-[30%] xl:w-[18%]">
            <h1 className="pl-[0.4rem] text-[1.2rem] font-bold text-[orange]">
              Navigation
            </h1>
            <Link to="/" className="mt-[0.6rem] flex items-center">
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">Home</span>
            </Link>
            <Link to="/groceries" className="mt-[0.6rem] flex items-center">
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">Groceries</span>
            </Link>
            <Link to="/trending" className="mt-[0.6rem] flex items-center">
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">Trending now</span>
            </Link>
            <Link
              to="/groceries/raw-products"
              className="mt-[0.6rem] flex items-center"
            >
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">Raw Products</span>
            </Link>
            <Link
              to="/groceries/beverages"
              className="mt-[0.6rem] flex items-center"
            >
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">Beverages</span>
            </Link>
          </div>

          {/* footer column 03 */}
          <div className="flex w-full flex-col pb-[2.4rem] md:w-[33%] lg:w-[30%] xl:w-[18%]">
            <h1 className="pl-[0.4rem] text-[1.2rem] font-bold text-[orange]">
              Trending
            </h1>
            <Link
              to="/groceries/raw-products/fruits"
              className="mt-[0.6rem] flex items-center"
            >
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">Fruits</span>
            </Link>
            <Link
              to="/groceries/raw-products/vegetables"
              className="mt-[0.6rem] flex items-center"
            >
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">Vegetables</span>
            </Link>
            <Link
              to="/groceries/trending/top-products"
              className="mt-[0.6rem] flex items-center"
            >
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">Top Products</span>
            </Link>
            <Link
              to="/groceries/trending/recent-products"
              className="mt-[0.6rem] flex items-center"
            >
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">Recent Products</span>
            </Link>
            <Link
              to="/groceries/trending/popular-now"
              className="mt-[0.6rem] flex items-center"
            >
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">Popular Now</span>
            </Link>
          </div>

          {/* footer column 04 */}
          <div className="flex w-full flex-col pb-[2.4rem] md:w-[33%] lg:w-[40%] xl:w-[18%]">
            <h1 className="pl-[0.4rem] text-[1.2rem] font-bold text-[orange]">
              Quick Links
            </h1>
            <Link to="/user/profile" className="mt-[0.6rem] flex items-center">
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">User Account</span>
            </Link>
            <Link to="#null" className="mt-[0.6rem] flex items-center">
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">
                Become an Affilate
              </span>
            </Link>
            <Link to="#null" className="mt-[0.6rem] flex items-center">
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">Track Orders</span>
            </Link>
            <Link
              to="/groceries/offers"
              className="mt-[0.6rem] flex items-center"
            >
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">New offers</span>
            </Link>
            <Link to="#null" className="mt-[0.6rem] flex items-center">
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">Latest Blogs</span>
            </Link>
          </div>

          {/* footer column 05 */}
          <div className="flex w-full flex-col pb-[3rem] md:w-[33%] lg:w-[60%] xl:w-[18%]">
            <h1 className="pl-[0.4rem] text-[1.2rem] font-bold text-[orange]">
              Services
            </h1>
            <Link to="/about" className="mt-[0.6rem] flex items-center">
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">About Us</span>
            </Link>
            <Link to="#null" className="mt-[0.6rem] flex items-center">
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">Contact Us</span>
            </Link>
            <Link to="/help" className="mt-[0.6rem] flex items-center">
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">Help Center</span>
            </Link>
            <Link to="#null" className="mt-[0.6rem] flex items-center">
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">Terms of use</span>
            </Link>
            <Link to="#null" className="mt-[0.6rem] flex items-center">
              <MdKeyboardArrowRight className="text-[1.3rem] text-[#fff]" />
              <span className="text-[1.1rem] text-[#fff]">Privacy policy</span>
            </Link>
          </div>
        </div>
      </div>

      {/* copyright section */}
      <div className="w-full border-t-[1px] border-[#3a4c4d] bg-[#173334]">
        <div className="mx-[auto] flex max-w-[1420px] items-center justify-center px-[0.4rem] py-[1.4rem]">
          <p className="text-[0.8rem] text-[#fff] lg:text-[1.1rem]">
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
        </div>
      </div>
    </>
  );
};

export default Footer;
