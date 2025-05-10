import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Layouts
const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));

// Pages
const Home = lazy(() => import("@pages/Home"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
const Cart = lazy(() => import("@pages/Cart"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Categories = lazy(() => import("@pages/Categories"));
const Products = lazy(() => import("@pages/Products"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
import Error from "@pages/Error";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback="Loading Please Wait...">
          <MainLayout />
        </Suspense>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback="Loading Please Wait...">
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/wishlist",
          element: (
            <Suspense fallback="Loading Please Wait...">
              <Wishlist />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense fallback="Loading Please Wait...">
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "/about-us",
          element: (
            <Suspense fallback="Loading Please Wait...">
              <AboutUs />
            </Suspense>
          ),
        },
        {
          path: "/categories",
          element: (
            <Suspense fallback="Loading Please Wait...">
              <Categories />
            </Suspense>
          ),
        },
        {
          path: "/categories/products/:prefix",
          element: (
            <Suspense fallback="Loading Please Wait...">
              <Products />
            </Suspense>
          ),
          loader: ({ params }) => {
            if (
              typeof params.prefix !== "string" ||
              !/^[a-z]+$/i.test(params.prefix)
            ) {
              throw new Response("Bad request", {
                status: 400,
                statusText: "Category not Found",
              });
            }
            return true;
          },
        },
        {
          path: "/register",
          element: (
            <Suspense fallback="Loading Please Wait...">
              <Register />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense fallback="Loading Please Wait...">
              <Login />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
