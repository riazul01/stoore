import SectionProducts from "components/common/SectionProducts";
import Categories from "components/sections/home/categories";
import { products } from "data/products";
import paths from "routes/paths";

const Home = () => {
  const topProducts = products.filter((item) => item.topSelling);
  const recentProducts = products.filter((item) => item.recentProduct);
  const popularProducts = products.filter((item) => item.popularNow);

  return (
    <>
      <Categories />
      <SectionProducts title="Top Products" link={paths.topSelling} products={topProducts}/>
      <SectionProducts title="Recent Products" link={paths.topSelling} products={recentProducts}/>
      <SectionProducts title="Popular now" link={paths.topSelling} products={popularProducts}/>
    </>
  );
};

export default Home;
