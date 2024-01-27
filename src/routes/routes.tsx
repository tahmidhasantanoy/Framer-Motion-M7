import { createBrowserRouter } from "react-router-dom";
import Layout from "../MainLayout/Layout";
import Home from "../pages/Home/Home";
import Gesture from "../pages/Gesture";
import UseAnimationHooks from "../pages/UseAnimationHooks";
import UseCycleHook from "../pages/UseCycleHook";

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
      },
      {
        path : "cyclehook",
        element : <UseCycleHook/>
      }
    ],
  },
]);

export default router;
