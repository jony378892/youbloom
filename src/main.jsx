import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import YoubloomProvider from "./contexts/YoubloomProvider";

createRoot(document.getElementById("root")).render(
  <YoubloomProvider>
    <RouterProvider router={router}></RouterProvider>
  </YoubloomProvider>,
);
