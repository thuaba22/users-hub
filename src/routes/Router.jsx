import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Users from "../pages/Users/Users";
import AddUser from "../pages/AddUser/AddUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Users></Users>,
      },
      {
        path: "/add-user",
        element: <AddUser></AddUser>,
      },
    ],
  },
]);

export default router;
