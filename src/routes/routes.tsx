import { createBrowserRouter } from "react-router-dom";
import Lesson1 from "../pages/Lesson1";
import Layout from "../MainLayout/Layout";
import Home from "../pages/Home/Home";
import Gesture from "../pages/Gesture";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path : "gesture",
        element : <Gesture/>
      }
    ],
  },
]);

export default router;
