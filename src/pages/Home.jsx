import SearchBox from "../components/SearchBox";
import useYoubloom from "../hooks/useYoubloom";
import Post from "../components/Post";

export default function Home() {
  const { filteredPosts } = useYoubloom();

  return (
    <div className="flex flex-col gap-3 p-5 pb-20 bg-gray-100 min-h-screen">
      <div className="w-full max-w-7xl mx-auto">
        {/* Search Field */}
        <SearchBox />

        {/* Total posts count */}
        <p className="text-sm text-gray-700">
          Total {filteredPosts.length}{" "}
          {filteredPosts.length <= 1 ? "post " : "posts "} found.
        </p>

        {/* Responsive layout for posts */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-5 pt-10">
          {filteredPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>

        {/* No posts message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No posts found. Try searching with different keywords.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
