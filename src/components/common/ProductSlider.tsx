import { Link } from "react-router-dom";
import { Product } from "data/products";
import ProductCard from "components/common/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextBtn from "./slider-btns/NextBtn";
import PrevBtn from "./slider-btns/PrevBtn";
import { FaArrowRightLong } from "react-icons/fa6";

interface SectionProductsProps {
  title: string;
  link: string;
  products: Product[];
}

const ProductSlider = ({ title, products, link }: SectionProductsProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PrevBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="pb-16">
      <div className="">
        <div className="flex items-center justify-between pb-4">
          <h1 className="text-xl font-bold capitalize">{title}</h1>
          <Link to={link} className=" flex items-center gap-1.5">
            <p className="text-base font-semibold text-[#333]">View all</p>
            <FaArrowRightLong className="text-[#333]"/>
          </Link>
        </div>

        <Slider {...settings} className="border border-b-0 border-e-0 border-[silver]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
