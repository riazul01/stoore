import { ReactElement, cloneElement } from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import footerItems from "data/footerItems";
import AppStoreBadge from "assets/images/badges/app-store.png";
import GooglePalyBadge from "assets/images/badges/google-play.png";
import Services from "./Services";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <Services />

      <div className="flex flex-wrap justify-between py-8">
        <div className="w-full md:w-[50%] lg:w-[40%] xl:w-[28%] xl:pr-6">
          <h1 className="font-croissant text-3xl text-[orange]">Grocery</h1>
          <p className="mt-4 text-base font-medium text-[#ddd]">
            Explore the best deals with Grocery, <br /> Your onestop shop for
            all your daily essentials.
          </p>
          <div className="mt-5 flex items-center justify-start gap-3">
            <FiPhoneCall className="text-2xl text-[orange]" />
            <div className="flex flex-col gap-1">
              <p className="text-xs uppercase text-[#ccc]">Support Center</p>
              <p className="text-lg font-semibold tracking-wide text-[orange]">
                +88 01234567890
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-start gap-3">
            <IoIosMail className="text-2xl text-[orange]" />
            <div className="flex flex-col gap-1">
              <p className="text-xs uppercase text-[#ccc]">Email us at</p>
              <p className="text-lg font-semibold tracking-wide text-[orange]">
                info@example.com
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col md:w-[50%] lg:w-[30%] xl:w-[18%]">
          <h3 className="text-base font-bold uppercase text-[orange]">
            {footerItems.navigation.subheader}
          </h3>
          {footerItems.navigation.items.map((item) => (
            <Link
              to={item.link}
              className="mt-2 text-base font-semibold uppercase text-[#ddd]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* footer column 03 */}
        <div className="flex w-full flex-col pb-[2.4rem] md:w-[33%] lg:w-[30%] xl:w-[18%]">
          <h3 className="text-base font-bold uppercase text-[orange]">
            {footerItems.quickLinks.subheader}
          </h3>
          {footerItems.quickLinks.items.map((item) => (
            <Link
              to={item.link}
              className="mt-[0.6rem] text-base font-semibold uppercase text-[#ddd]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* footer column 03 */}
        <div className="flex w-full flex-col pb-[2.4rem] md:w-[33%] lg:w-[30%] xl:w-[18%]">
          <h3 className="text-base font-bold uppercase text-[orange]">
            {footerItems.information.subheader}
          </h3>
          {footerItems.information.items.map((item) => (
            <Link
              to={item.link}
              className="mt-[0.6rem] text-base font-semibold uppercase text-[#ddd]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex w-full flex-col pb-[2.4rem] md:w-[33%] lg:w-[30%] xl:w-[18%]">
          <p className="text-base font-bold uppercase text-[orange]">
            Download App
          </p>
          <p className="mt-4 text-sm text-[#ddd]">
            Download app to get -10% discount
          </p>
          <div className="mt-2 flex items-center gap-2">
            <a href="#!" title="google play" className="h-10">
              <img
                src={GooglePalyBadge}
                className="h-full object-contain"
                alt="google-play"
              />
            </a>
            <a href="#!" title="app store" className="h-10">
              <img
                src={AppStoreBadge}
                className="h-full object-contain"
                alt="google-play"
              />
            </a>
          </div>
          <p className="mt-5 text-xs font-semibold uppercase text-[#ddd]">
            Follow us
          </p>
          <div className="mt-2.5 flex items-center gap-2">
            {footerItems.socialLinks.items.map((item) => {
              return (
                <a
                  href="#!"
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-[#888]"
                  title={item.name}
                >
                  {cloneElement(item.icon as ReactElement, {
                    className: "text-xl text-[#ddd]",
                  })}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <Copyright />
    </>
  );
};

export default Footer;
