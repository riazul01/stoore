/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "layouts/main-layout";
import Splash from "components/loading/Splash";
import PageLoader from "components/loading/PageLoader";
import paths, { parentPaths, rootPaths } from "./paths";

const App = lazy(() => import("App"));
const Home = lazy(() => import("pages/home"));

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: rootPaths.pageRoot,
            element: <Home />,
          },
          {
            path: parentPaths.rawProducts,
            element: <Home />,
          },
          {
            path: parentPaths.beverages,
            element: <Home />,
          },
          {
            path: paths.vegetables,
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default router;
