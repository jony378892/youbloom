import { useEffect, useState } from "react";
import PostContext from "./PostContext";

export default function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const term = searchText.trim().toLowerCase();

  // Function for filtering posts
  const filteredPosts = term
    ? posts.filter(
        (post) =>
          post.title.trim().includes(term.toLowerCase()) ||
          post.body.trim().includes(term.toLowerCase()),
      )
    : posts;

  // Responsible for fetching posts
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (res.status === 404) {
          throw new Error("Error fetching posts");
        }
        const data = await res.json();

        // Slice the posts array
        setPosts(data.slice(0, 20));
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const values = {
    error,
    posts,
    setPosts,
    loading,
    setLoading,
    filteredPosts,
    setSearchText,
  };

  return <PostContext value={values}>{children}</PostContext>;
}
