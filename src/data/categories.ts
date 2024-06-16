import paths from "routes/paths";
import images from "./images";

interface Categories {
  id: number;
  name: string;
  quantity: number;
  path: string;
  image: string;
}

export const categories: Categories[] = [
  {
    id: 1,
    name: "Vegetables",
    quantity: 1542,
    path: paths.vegetables,
    image: images.vegetables,
  },
  {
    id: 2,
    name: "Fruits",
    quantity: 890,
    path: paths.fruits,
    image: images.fruits,
  },
  {
    id: 3,
    name: "Meat",
    quantity: 120,
    path: paths.meat,
    image: images.meat,
  },
  {
    id: 4,
    name: "Fish",
    quantity: 864,
    path: paths.fish,
    image: images.fish,
  },
  {
    id: 5,
    name: "Eggs",
    quantity: 8,
    path: paths.eggs,
    image: images.eggs,
  },
  {
    id: 6,
    name: "Spices",
    quantity: 1445,
    path: paths.spices,
    image: images.spices,
  },
  {
    id: 7,
    name: "Rice",
    quantity: 80,
    path: paths.rice,
    image: images.rice,
  },
  {
    id: 8,
    name: "Flour",
    quantity: 50,
    path: paths.flour,
    image: images.flour,
  },
  {
    id: 9,
    name: "Oil",
    quantity: 978,
    path: paths.oil,
    image: images.oil,
  },
  {
    id: 10,
    name: "Tea & Coffe",
    quantity: 342,
    path: paths.teaCoffe,
    image: images.tea,
  },
  {
    id: 11,
    name: "Dry Fruits",
    quantity: 126,
    path: paths.dryFruits,
    image: images.dryFruits,
  },
  {
    id: 12,
    name: "Jams & Jellies",
    quantity: 40,
    path: paths.jamJellies,
    image: images.jams,
  },
  {
    id: 13,
    name: "Biscuits",
    quantity: 1228,
    path: paths.biscuits,
    image: images.biscuits,
  },
  {
    id: 14,
    name: "Cakes",
    quantity: 90,
    path: paths.cakes,
    image: images.cakes,
  },
  {
    id: 15,
    name: "Breads",
    quantity: 30,
    path: paths.breads,
    image: images.breads,
  },
];
