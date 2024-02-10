import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Users from "../pages/Users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Users></Users>,
      },
    ],
  },
]);

export default router;
