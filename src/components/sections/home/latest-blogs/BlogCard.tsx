import { BlogData } from "data/blogsData";
import { Link } from "react-router-dom";

interface BlogCardProps {
  data: BlogData;
}

const BlogCard = ({ data }: BlogCardProps) => {
  const { title, desc, image, link, tags } = data;
  return (
    <div className="h-[480px] w-full overflow-hidden rounded-md border border-gray-200 p-[0.2rem] shadow-lg">
      <div className="h-[55%] w-full overflow-hidden rounded-sm cursor-pointer">
        <img
          src={image}
          className="h-full w-full transition-all duration-300 ease-in-out object-cover transform hover:scale-150 hover:rotate-12"
          alt={"blog_image"}
        />
      </div>

      <div className="relative flex flex-col gap-2 h-[45%] w-full p-2.5 pt-4">
        <div className="flex items-center gap-1.5">
          {tags.slice(0, 4).map((tag) => (
            <span className="bg-[#d0fc8a] px-2 py-0.5 text-[#3b5f1a] font-semibold rounded-md">{tag}</span>
          ))}
        </div>

        <Link to={link} className="text-xl font-bold">
          {title}
        </Link>

        <p className="text-base">
          {desc.slice(0, 75).split(" ").slice(0, -1).join(" ").trim()}...
        </p>

        <Link to={link} className="text-base font-semibold">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
