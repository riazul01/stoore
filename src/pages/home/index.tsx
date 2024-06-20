import { useContext } from "react";
import { ProductsContext } from "context/ProductsContextProvider";
import Categories from "components/common/categories";
import paths from "routes/paths";
import TopRated from "components/sections/home/top-rated";
import DealsOfTheWeek from "components/sections/home/deals-of-the-week";
import ProductSlider from "components/common/ProductSlider";
import LatestBlogs from "components/sections/home/latest-blogs";

const Home = () => {
  const { topProducts, recentProducts, popularProducts } =
    useContext(ProductsContext)!;

  console.log(topProducts);
  console.log(recentProducts);
  console.log(popularProducts);

  return (
    <>
      <Categories />
      <div className="grid grid-cols-12 pb-20">
        <div className="col-span-3 mr-4">
          <TopRated />
        </div>
        <div className="col-span-9">
          <ProductSlider
            title="Top Products"
            link={paths.topSelling}
            products={topProducts}
          />
          <ProductSlider
            title="Recent Products"
            link={paths.topSelling}
            products={recentProducts}
          />
          <ProductSlider
            title="Popular now"
            link={paths.topSelling}
            products={popularProducts}
          />
          <DealsOfTheWeek />
        </div>
      </div>
      <LatestBlogs/>
    </>
  );
};

export default Home;
