import { useContext } from "react";
import { ProductsContext } from "context/ProductsContextProvider";
import SectionProducts from "components/common/SectionProducts";
import Categories from "components/sections/home/categories";
import paths from "routes/paths";

const Home = () => {
  const { topProducts, recentProducts, popularProducts } =
    useContext(ProductsContext)!;

  return (
    <>
      <Categories />
      <SectionProducts
        title="Top Products"
        link={paths.topSelling}
        products={topProducts}
      />
      <SectionProducts
        title="Recent Products"
        link={paths.topSelling}
        products={recentProducts}
      />
      <SectionProducts
        title="Popular now"
        link={paths.topSelling}
        products={popularProducts}
      />
    </>
  );
};

export default Home;
