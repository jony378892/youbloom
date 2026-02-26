import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Button from "../components/Button";
import { Link } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      setPosts(data.slice(0, 20));
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 gap-5 p-4">
      {posts.map((post) => (
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
  );
}
