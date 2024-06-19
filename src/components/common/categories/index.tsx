import { Link } from "react-router-dom";
import { categories } from "data/categories";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="mx-auto mb-8 max-w-[1420px]">
      <div className="grid w-full grid-cols-2 border border-b-0 border-e-0 border-[silver] sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8">
        {categories.map((item) => {
          return (
            <Link key={item.id} to={item.path}>
              <Category
                title={item.name}
                quantity={item.quantity}
                Image={item.image}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
