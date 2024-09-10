import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

import NotFound from "../pages/ErrorPages/NotFound";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: "true",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
