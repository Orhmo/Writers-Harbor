import React, { lazy, Suspense } from "react";
import { useAuth } from "./context/authContext";
import { ToastContainer } from "react-toastify";
import TypewriterText from "./components/others/TypewriterText";

const AuthenticatedRoutes = lazy(() =>
  import("./components/routes/AuthenticatedRoutes")
);
const UnAuthenticatedRoutes = lazy(() =>
  import("./components/routes/UnAuthenticatedRoutes")
);

const App = () => {
  const { authorized } = useAuth();

  const suspenseFallback = (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="flex flex-col gap-8 justify-center items-center">
        <p className="text-5xl leading-8 style text-white no-underline hover:opacity-80">
          <TypewriterText text="writersHarbor....." repetitions={2} />
        </p>
      </div>
    </div>
  );

  return (
    <Suspense fallback={suspenseFallback}>
      <ToastContainer />
      {authorized ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />}
    </Suspense>
  );
};

export default App;

