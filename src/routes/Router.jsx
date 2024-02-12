import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Users from "../pages/Users/Users";
import AddUser from "../pages/AddUser/AddUser";
import UserDetails from "../pages/UserDetails/UserDetails";

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
      {
        path: "/user-details/:id",
        element: <UserDetails></UserDetails>,
        loader: ({ params }) =>
          fetch(` https://dummyjson.com/users/${params.id}`),
      },
    ],
  },
]);

export default router;
