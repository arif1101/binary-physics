import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import Courses from "../page/courses/Courses";
import Books from "../page/Books/Books";
import CourseDetails from "../page/CourseDetails/CourseDetails";
import BookDetails from "../page/BookDetails/BookDetails";
import PrivateRoute from "./PrivateRoute";
import Cart from "../page/Cart/Cart";
import Profile from "../page/Profile/Profile";
import Dashboard from "../page/Dashboard/Dashboard";


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
          path: "/my-profile",
          element: <Profile></Profile>
        },
        {
          path:"/courses",
          element: <Courses></Courses>
        },
        {
          path: '/courses/:id',
          element: <CourseDetails></CourseDetails>
        },
        {
          path: '/cart',
          element: <PrivateRoute><Cart></Cart></PrivateRoute>
        },
        {
          path:"/books",
          element: <Books></Books>
        },
        {
          path: '/books/:id',
          element: <BookDetails></BookDetails>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        }

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