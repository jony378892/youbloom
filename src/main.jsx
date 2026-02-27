import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import PostProvider from "./contexts/post/PostProvider";
import AuthProvider from "./contexts/auth/AuthProvider";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <PostProvider>
      <RouterProvider router={router}></RouterProvider>
    </PostProvider>
    ,
  </AuthProvider>,
);
