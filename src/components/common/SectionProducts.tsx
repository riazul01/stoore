import { Link } from "react-router-dom";
import { Product } from "data/products";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ProductCard from "components/common/ProductCard";

interface SectionProductsProps {
  title: string;
  link: string;
  products: Product[];
}

const SectionProducts = ({ title, products, link }: SectionProductsProps) => {
  return (
    <div className="mx-auto max-w-[1420px] pb-16">
      <div className="flex items-center justify-between py-[1.2rem]">
        <h1 className="text-xl font-bold capitalize">{title}</h1>
        <Link to={link} className="flex items-center">
          <p className="text-base font-bold text-[green]">View more</p>
          <MdKeyboardDoubleArrowRight className="ms-2 text-lg font-bold text-[green]" />
        </Link>
      </div>

      <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SectionProducts;
