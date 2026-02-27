import { useEffect, useState } from "react";
import YoubloomContext from "./YoubloomContext";
import Loading from "../components/Loading";

export default function YoubloomProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(null);
  const [searchText, setSearchText] = useState("");
  const term = searchText.trim().toLowerCase();

  const filteredPosts = term
    ? posts.filter(
        (post) =>
          post.title.trim().includes(term.toLowerCase()) ||
          post.body.trim().includes(term.toLowerCase()),
      )
    : posts;

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

  const values = {
    posts,
    setPosts,
    user,
    setUser,
    loading,
    setLoading,
    filteredPosts,
    setSearchText,
  };

  return <YoubloomContext value={values}>{children}</YoubloomContext>;
}
