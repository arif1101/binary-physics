import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Courses from "../page/courses/Courses";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path:"/courses",
          element: <Courses></Courses>
        },

      ]
    },
    {
      path:"/login",
      element: <Login></Login>
    },
    {
      path:"/register",
      element: <Register></Register>
    }
]);
export default router;