import { SiCodefresh } from "react-icons/si";
import { FaTruckFast } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";

const Services = () => {
  return (
    <div className="flex items-center justify-between border-b border-[#153535] py-6">
      <div className="flex items-center justify-start gap-4">
        <div className="">
          <SiCodefresh className="text-3xl text-[orange]" />
        </div>
        <div className="">
          <h3 className="text-lg font-semibold text-[#eee]">Fresh Products</h3>
          <p className="text-sm text-[#ddd]">Quality you can taste</p>
        </div>
      </div>

      <div className="h-12 border-r border-[#153535]" />

      <div className="flex items-center justify-start gap-4">
        <div className="">
          <FaTruckFast className="text-3xl text-[orange]" />
        </div>
        <div className="">
          <h3 className="text-lg font-semibold text-[#eee]">Quick delivery</h3>
          <p className="text-sm text-[#ddd]">Fast shipping guaranteed</p>
        </div>
      </div>

      <div className="h-12 border-r border-[#153535]" />

      <div className="flex items-center justify-start gap-4">
        <div className="">
          <MdPayments className="text-3xl text-[orange]" />
        </div>
        <div className="">
          <h3 className="text-lg font-semibold text-[#eee]">Easy payment</h3>
          <p className="text-sm text-[#ddd]">Convenient checkout options</p>
        </div>
      </div>

      <div className="h-12 border-r border-[#153535]" />

      <div className="flex items-center justify-start gap-4">
        <div className="">
          <FaHeadset className="text-3xl text-[orange]" />
        </div>
        <div className="">
          <h3 className="text-lg font-semibold text-[#eee]">24/7 support</h3>
          <p className="text-sm text-[#ddd]">Here for you anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
