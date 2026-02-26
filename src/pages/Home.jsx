import Button from "../components/Button";
import { Link } from "react-router";
import SearchBox from "../components/SearchBox";
import useUser from "../hooks/useUser";

export default function Home() {
  const { filteredPosts } = useUser();

  return (
    <div className="flex flex-col gap-3 p-5">
      <SearchBox />
      <div className="grid grid-cols-1 gap-5">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-400 rounded-lg shadow-lg p-3"
          >
            <p>
              <strong>Id: </strong>
              {post.id}
            </p>
            <p>
              <strong>Title:</strong> {post.title}
            </p>
            <p>
              <strong>Description:</strong> {post.body}
            </p>
            <Link to={`/post-detail/${post.id}`}>
              <Button text="More Info" className="mt-3 cursor-pointer" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
