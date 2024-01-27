import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../pages/Home/Home";
import Gesture from "../pages/Gesture";
import UseAnimationHooks from "../pages/UseAnimationHooks";

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
      },
      {
        path : "animationhooks",
        element : <UseAnimationHooks/>
      }
    ],
  },
]);

export default router;
