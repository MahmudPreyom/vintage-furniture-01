import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import ErrorPage from "../sharepages/ErrorPage";
import Home from "../components/home/Home";
import Login from "../sharepages/Login";
import Register from "../sharepages/Register";
import Featureds from "../components/featureds/Featureds";
import Shop from "../components/shop/Shop";
import AboutUs from "../components/aboutus/AboutUs";
import Contact from "../components/contact/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/featureds',
          element: <Featureds />
        },
        {
          path: '/shop',
          element: <Shop />
        },
        {
          path: '/aboutus',
          element: <AboutUs />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        }
      ]
    },
  ]);