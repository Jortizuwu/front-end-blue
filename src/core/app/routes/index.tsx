// src/routes/routes.tsx
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import PrivateRoute from "./components/route.private";

const Layout = lazy(() => import("../layout"));
const Characters = lazy(() => import("../../pages/characters"));
const Reactions = lazy(() => import("../../pages/reactions"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // element: <PrivateRoute />,
        children: [
          { index: true, element: <Characters /> },
          { path: "reactions", element: <Reactions /> },
        ],
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
