export const rootPaths = {
  root: "/",
  pageRoot: "groceries",
  authRoot: "auth",
  errorRoot: "error",
};

export const parentPaths = {
  rawProducts: `${rootPaths.pageRoot}/raw-products`,
  beverages: `${rootPaths.pageRoot}/beverages`,
  trending: `${rootPaths.pageRoot}/trending`,
};

export default {
  vegetables: `/${parentPaths.rawProducts}/vegetables`,
  fruits: `/${parentPaths.rawProducts}/fruits`,
  meat: `/${parentPaths.rawProducts}/meat`,
  fish: `/${parentPaths.rawProducts}/fish`,
  eggs: `/${parentPaths.rawProducts}/eggs`,
  spices: `/${parentPaths.rawProducts}/spices`,
  rice: `/${parentPaths.rawProducts}/rice`,
  flour: `/${parentPaths.rawProducts}/flour`,
  oil: `/${parentPaths.rawProducts}/oil`,
  teaCoffe: `/${parentPaths.beverages}/tea-coffe`,
  dryFruits: `/${parentPaths.beverages}/dry-fruits`,
  jamJellies: `/${parentPaths.beverages}/jam-jellies`,
  biscuits: `/${parentPaths.beverages}/biscuits`,
  cakes: `/${parentPaths.beverages}/cakes`,
  breads: `/${parentPaths.beverages}/breads`,
  topSelling: `/${parentPaths.trending}/top-selling`,
  recentProducts: `/${parentPaths.trending}/recent-products`,
  popularNow: `/${parentPaths.trending}/popular-now`,
  offers: `/${rootPaths.pageRoot}/offers`,
  cart: `/cart`,
  checkout: `/checkout`,
  login: `/${rootPaths.authRoot}/login`,
  signup: `/${rootPaths.authRoot}/signup`,
};
