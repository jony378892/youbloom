import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";

export default function PostDetail() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      const data = await res.json();
      setPost(data);
      // console.log(data);
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return <div>This is the detail page</div>;
}
