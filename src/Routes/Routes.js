import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/Home/About/About";
import Blogs from "../Pages/Home/Blogs/Blogs";
import CategoryCard from "../Pages/Home/CategoryCards/CategoryCard";

import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/category",
                element:<CategoryCard></CategoryCard>
               
            },
            {
                path:"/about",
                element:<About></About>
               
            },
            {
                path:"/blogs",
                element:<Blogs></Blogs>
               
            },
            {
                path:"/signup",
                element:<Signup></Signup>
               
            },
            {
                path:"/login",
                element:<Login></Login>
               
            },

        ]
    }
])
