import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../sharepages/ErrorPage";
import Home from "../components/home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home/>
        }
      ]
    },
  ]);