import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Loading from "../components/Loading";
import { FaArrowLeft } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import usePost from "../hooks/usePost";

export default function PostDetail() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(null);
  const { id } = useParams();
  const { error, setError } = usePost();

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );

        if (res.status === 404) {
          throw new Error("Error fetching post");
        }
        const data = await res.json();
        setPost(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 text-xl font-bold">{error}</p>
      </div>
    );
  }

  return (
    <div className="">
      {/* Header with back button */}
      <div className="">
        <div className="max-w-4xl mx-auto px-5 pb-3 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            <FaArrowLeft size={20} />
            Back to Homepage
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-5 py-5">
        {/* Featured image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={`https://picsum.photos/800/400?random=${id}`}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Content card */}
        <div className="bg-white rounded-lg shadow-md p-5">
          {/* Metadata */}
          <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <FaUser size={18} />
              <span className="text-sm">Post #{post.id}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <SlCalender size={18} />
              <span className="text-sm">February 26, 2026</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight capitalize">
            {post.title}
          </h1>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {post.body}
            </p>
          </div>

          {/* Call to action */}
          <div className="mt-12 flex gap-4">
            <Link
              to="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-3 rounded-lg"
            >
              Read More Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
