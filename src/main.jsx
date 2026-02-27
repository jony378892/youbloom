import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import PostProvider from "./contexts/PostProvider";

createRoot(document.getElementById("root")).render(
  <PostProvider>
    <RouterProvider router={router}></RouterProvider>
  </PostProvider>,
);
