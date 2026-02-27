import { use } from "react";
import PostContext from "../contexts/PostContext";

export default function usePost() {
  const context = use(PostContext);
  if (!context) {
    throw new Error("usePost must be used within PostProvider");
  }

  return context;
}
