import { PropsWithChildren, createContext } from "react";
import { Product, products } from "data/products";

interface ProductsContextType {
  products: Product[];
  topProducts: Product[];
  recentProducts: Product[];
  popularProducts: Product[];
}

export const ProductsContext = createContext<ProductsContextType | null>(null);

const ProductsContextProvider = ({ children }: PropsWithChildren) => {
  const topProducts = products.filter((item) => item.topSelling);
  const recentProducts = products.filter((item) => item.recentProduct);
  const popularProducts = products.filter((item) => item.popularNow);

  return (
    <ProductsContext.Provider
      value={{ products, topProducts, recentProducts, popularProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
