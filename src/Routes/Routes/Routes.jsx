import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import HomePage from "../../Pages/HomePage/HomePage";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AllToy from "../../Pages/AllToy/AllToy";
import AddAToy from "../../Pages/AddAToy/AddAToy";
import MyToy from "../../Pages/MyToy/MyToy";
import Blog from "../../Pages/Blog/Blog";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import ToyInifo from "../../Pages/AllToy/ToyInifo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/alltoy",
        element: <AllToy></AllToy>,
      },
      {
        path: "/addatoy",
        element: (
          <PrivateRoutes>
            <AddAToy></AddAToy>
          </PrivateRoutes>
        ),
      },
      {
        path: "/mytoy",
        element: <MyToy></MyToy>,
      },
      {
        path: "/toyinfo/:id",
        element: <ToyInifo></ToyInifo>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
