import { useIsMobile } from "@/shared/hooks/use-is-mobile";
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

const Layout = lazy(() => import("../layout"));
const Characters = lazy(() => import("../../pages/characters"));
const Reactions = lazy(() => import("../../pages/reactions"));
const Explore = lazy(() => import("../../pages/explore"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        children: [
          { index: true, element: <Characters /> },
          { path: "reactions", element: <Reactions /> },
          { path: "explore", element: <Explore /> },
        ],
      },
    ],
  },
  { path: "*", element: <h1>404 Not Found</h1> },
]);

const App = () => {
  const isMobile = useIsMobile();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
      <Toaster position={isMobile ? "top-center" : "bottom-right"} richColors />
    </Suspense>
  );
};

export default App;
