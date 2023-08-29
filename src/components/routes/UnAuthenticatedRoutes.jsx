import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../../pages/unauthenticated/ErrorPage";
import Home from "../../pages/unauthenticated/homepage";
import { PATH_NAMES } from "../../constants";
import LandingLayout from "../../routes/LandingLayout";
import SignIn from "../../auth/SignIn";
import SignUp from "../../auth/SignUp";

const unAuthenticatedRoutes = createBrowserRouter([
  {
    path: PATH_NAMES.root,
    element: (
      <LandingLayout>
        <Home />
      </LandingLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: PATH_NAMES.login,
    element: <SignIn/>,
    errorElement: <ErrorPage />,
  },
  {
    path: PATH_NAMES.signup,
    element: <SignUp/>,
    errorElement: <ErrorPage />,
  },
]);

const UnAuthenticatedRoutes = () => (
  <div>
    
    <RouterProvider router={unAuthenticatedRoutes} />

  </div>
);

export default UnAuthenticatedRoutes;
