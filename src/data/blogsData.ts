import images from "./images";

export interface BlogData {
  id: number;
  title: string;
  desc: string;
  date: string;
  timeToRead: string;
  tags: string[];
  image: string;
  link: string;
}

export const blogData: BlogData[] = [
  {
    id: 1,
    title: "Top 5 Superfoods to Add for Your Healthy Diet",
    desc: "Boost your nutrition with these top 5 superfoods. Learn about the health benefits of incorporating nutrient-dense foods like kale, blueberries, quinoa, chia seeds, and salmon into your diet for a powerful health boost.",
    date: "20 Jan, 2024",
    timeToRead: "5 min",
    tags: ["vegetables", "diet"],
    image: images.blogImg1,
    link: "#!",
  },
  {
    id: 2,
    title: "Seasonal Produce: What's Fresh This Month",
    desc: "Stay up-to-date with the freshest seasonal produce available this month. Find out which fruits and vegetables are at their peak, offering the best flavors and highest nutritional value for your meals and recipes.",
    date: "20 Jan, 2024",
    timeToRead: "5 min",
    tags: ["fruits", "lemon"],
    image: images.blogImg2,
    link: "#!",
  },
  {
    id: 3,
    title: "Understanding Food Labels: What to Look For",
    desc: "Decode the information on food labels to make better choices at the grocery store. Learn how to read and understand nutritional labels, ingredient lists, and health claims to ensure you're buying the best products for your health.",
    date: "20 Jan, 2024",
    timeToRead: "5 min",
    tags: ["vegetables", "salad"],
    image: images.blogImg3,
    link: "#!",
  },
  {
    id: 4,
    title: "Meal Prep Ideas for Busy Weeknights",
    desc: "Simplify your weeknight dinners with these easy and delicious meal prep ideas. Learn how to plan and prepare meals in advance, so you can enjoy healthy, home-cooked dinners even on the busiest nights of the week.",
    date: "20 Jan, 2024",
    timeToRead: "5 min",
    tags: ["food", "nutrition"],
    image: images.blogImg4,
    link: "#!",
  },
];
