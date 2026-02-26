import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

export default function Post({ post }) {
  return (
    <div className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-200 h-48">
        <img
          src={`https://picsum.photos/400/300?random=${post.id}`}
          alt={post.title}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Badge */}
        <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          Post #{post.id}
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-3 p-5 pb-6 flex-grow">
        {/* Title */}
        <p className="font-bold text-gray-900 text-lg uppercase leading-tight group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
          {post.title}
        </p>

        {/* Description */}
        <p className="line-clamp-3 text-gray-600 text-sm leading-relaxed flex-grow">
          {post.body}
        </p>

        {/* Button */}
        <Link to={`/post/detail/${post.id}`} className="mt-auto">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg cursor-pointer py-2.5 px-4 transition-all duration-200 flex items-center justify-center gap-2 group/btn">
            More Info
            <FaArrowRight
              size={18}
              className="group-hover/btn:translate-x-1 transition-transform"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
