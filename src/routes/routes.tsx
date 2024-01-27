import { createBrowserRouter } from "react-router-dom";
import Lesson1 from "../pages/Lesson1";
import Layout from "../MainLayout/Layout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
