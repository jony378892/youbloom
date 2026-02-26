import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import UserProvider from "./contexts/UserProvider";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <RouterProvider router={router}></RouterProvider>,
  </UserProvider>,
);
