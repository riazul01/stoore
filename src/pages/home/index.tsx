import { useContext } from "react";
import { ProductsContext } from "context/ProductsContextProvider";
import Categories from "components/common/categories";
import paths from "routes/paths";
import TopRated from "components/sections/home/top-rated";
import DealsOfTheWeek from "components/sections/home/deals-of-the-week";
import ProductSlider from "components/common/ProductSlider";

const Home = () => {
  const { topProducts, recentProducts, popularProducts } =
    useContext(ProductsContext)!;

  console.log(topProducts);
  console.log(recentProducts);
  console.log(popularProducts);

  return (
    <>
      <Categories />
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-3">
          <TopRated />
        </div>
        <div className="col-span-9">
          <ProductSlider
            title="Top Products"
            link={paths.topSelling}
            products={topProducts}
          />
          <DealsOfTheWeek />
        </div>
      </div>
      {/* <SectionProducts
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
      /> */}
      <div className="grid grid-cols-12">
        <div className="col-span-3"></div>
        <div className="col-span-9"></div>
      </div>
    </>
  );
};

export default Home;
