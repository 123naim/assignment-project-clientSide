import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import CreateAssignment from "../Pages/Create_Assignment/CreateAssignment";
import SubmitedAssignment from "../Pages/Submited_Assignment/SubmitedAssignment";
import My_Assignment from "../Pages/My_Assignment/My_Assignment";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import ViewAssignment from "../Pages/All_Assignment/ViewAssignment";
import AllAssignment from "../Pages/All_Assignment/AllAssignment";
import UpdateAssignment from "../Pages/All_Assignment/UpdateAssignment";
import TakeAssignment from "../Pages/All_Assignment/TakeAssignment";
import GiveMark from "../Pages/Submited_Assignment/giveMark";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/allassignment',
          element: <AllAssignment></AllAssignment>
        },
        {
          path: '/createAssignment',
          element: <PrivateRoutes><CreateAssignment></CreateAssignment></PrivateRoutes>
        },
        {
          path: '/submitedAssignment',
          element: <PrivateRoutes><SubmitedAssignment></SubmitedAssignment></PrivateRoutes>
        },
        {
          path: '/submitedAssignment/givemark/:id',
          element: <PrivateRoutes><GiveMark></GiveMark></PrivateRoutes>
        },
        {
          path: '/myAssignment/givemark/:id',
          element: <PrivateRoutes><GiveMark></GiveMark></PrivateRoutes>
        },
        {
          path: '/myAssignment',
          element: <PrivateRoutes><My_Assignment></My_Assignment></PrivateRoutes>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/singUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/allassignment/details/:id',
          element: <PrivateRoutes><ViewAssignment></ViewAssignment></PrivateRoutes>
        },
        {
          path: '/allassignment/update/:id',
          element: <PrivateRoutes><UpdateAssignment></UpdateAssignment></PrivateRoutes>
        },
        {
          path: '/allassignment/data/:id',
          element: <PrivateRoutes><TakeAssignment></TakeAssignment></PrivateRoutes>
        }
    ]
    },
  ]);


  export default router