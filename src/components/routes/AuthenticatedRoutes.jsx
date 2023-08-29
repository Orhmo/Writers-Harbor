import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { PATH_NAMES, NAVIGATION_ROUTES, OTHER_AUTHENTICATED_ROUTES, OTHER_UNAUTHENTICATED_ROUTES } from "@/constants";
// import Onboarding from "@/pages/unauthenticated/Onboarding";
// import ErrorPage from "@/pages/unauthenticated/ErrorPage";
import { useAuth } from "@/context/authContext";
import SignIn from "../../auth/SignIn";
import SignUp from "../../auth/SignUp";

const AuthenticatedRoutes = () => {
  // const { authorized } = useAuth();

  const authenticatedRoutes = createBrowserRouter([
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
    // ...NAVIGATION_ROUTES.map((route) => ({
    //   path: route.path,
    //   element: authorized ? <route.element /> : window.location.assign(PATH_NAMES.root),
    // })),
    // ...OTHER_UNAUTHENTICATED_ROUTES.map((route) => ({
    //   path: route.path,
    //   element: <route.element />,
    // })),
    // ...OTHER_AUTHENTICATED_ROUTES.map((route) => ({
    //   path: route.path,
    //   element: authorized ? <route.element /> : window.location.assign(PATH_NAMES.root),
    // })),
  ]);

  return <RouterProvider router={authenticatedRoutes} />;
};

export default AuthenticatedRoutes;
