// import { FaArrowRightLong } from "react-icons/fa6";
import BlogCard from "./BlogCard";
import { blogData } from "data/blogsData";

const LatestBlogs = () => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-center pb-4">
        <div className="">
          <h1 className="text-center text-3xl font-bold capitalize">
            Our Recent Blogs
          </h1>
          <p className="text-base text-center">
            Explore our latest posts for tips, trends, and insights to enhance your  <br/>
            grocery shopping and healthy eating experience.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {
            blogData.map((data) => <BlogCard key={data.id} data={data} />)
        }
      </div>
    </div>
  );
};

export default LatestBlogs;
