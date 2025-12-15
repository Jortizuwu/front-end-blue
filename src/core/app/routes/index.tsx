// src/routes/routes.tsx
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import PrivateRoute from "./components/route.private";

const Layout = lazy(() => import("../layout"));
const Home = lazy(() => import("../../pages/home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // element: <PrivateRoute />,
        children: [{ index: true, element: <Home /> }],
      },
    ],
  },
  { path: "*", element: <h1>404 Not Found</h1> },
]);

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
