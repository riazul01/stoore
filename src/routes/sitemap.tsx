import paths, { rootPaths, parentPaths } from "./paths";

export interface SubMenuItem {
  name: string;
  pathName: string;
  path: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export interface MenuItem {
  id: string;
  subheader: string;
  path?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

const sitemap: MenuItem[] = [
  {
    id: "groceries",
    subheader: "Groceries",
    path: rootPaths.pageRoot,
  },
  {
    id: "raw-products",
    subheader: "Raw Products",
    path: parentPaths.rawProducts,
    items: [
      {
        name: "Vegetables",
        pathName: "vegetables",
        path: paths.vegetables,
      },
      {
        name: "Fruits",
        pathName: "fruits",
        path: paths.fruits,
      },
      {
        name: "Meat",
        pathName: "meat",
        path: paths.meat,
      },
      {
        name: "Fish",
        pathName: "fish",
        path: paths.fish,
      },
      {
        name: "Eggs",
        pathName: "eggs",
        path: paths.eggs,
      },
      {
        name: "Spices",
        pathName: "spices",
        path: paths.spices,
      },
      {
        name: "Rice",
        pathName: "rice",
        path: paths.rice,
      },
      {
        name: "Flour",
        pathName: "flour",
        path: paths.flour,
      },
      {
        name: "Oil",
        pathName: "oil",
        path: paths.oil,
      },
    ],
  },
  {
    id: "beverages",
    subheader: "Beverages",
    path: parentPaths.beverages,
    items: [
      {
        name: "Tea & Coffe",
        pathName: "tea-coffe",
        path: paths.teaCoffe,
      },
      {
        name: "Dry Fruits",
        pathName: "dry-fruits",
        path: paths.dryFruits,
      },
      {
        name: "Jams & Jellies",
        pathName: "jams-jellies",
        path: paths.jamJellies,
      },
      {
        name: "Biscuits",
        pathName: "biscuits",
        path: paths.biscuits,
      },
      {
        name: "Cakes",
        pathName: "cakes",
        path: paths.cakes,
      },
      {
        name: "Breads",
        pathName: "breads",
        path: paths.breads,
      },
    ],
  },
  {
    id: "trending",
    subheader: "Trending",
    path: parentPaths.trending,
  },
  {
    id: "offers",
    subheader: "New Offers",
    path: parentPaths.trending,
  },
];

export default sitemap;
