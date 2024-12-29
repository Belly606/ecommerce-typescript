import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "@layouts/MainLayout/MainLayout";

// Pages
const Home = lazy(() => import("@pages/Home"));
const ShoppingCart = lazy(() => import("@pages/ShoppingCart"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Categories = lazy(() => import("@pages/Categories"));
const Products = lazy(() => import("@pages/Products"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Error = lazy(() => import("@pages/Error"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="Loading Please Wait...">
            {" "}
            <Home />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback="Loading Please Wait...">
            {" "}
            <ShoppingCart />
          </Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Suspense fallback="Loading Please Wait...">
            {" "}
            <Wishlist />
          </Suspense>
        ),
      },
      {
        path: "categories",
        element: (
          <Suspense fallback="Loading Please Wait...">
            {" "}
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "categories/products/:prefix",
        element: (
          <Suspense fallback="Loading Please Wait...">
            {" "}
            <Products />
          </Suspense>
        ),
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category Not Found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback="Loading Please Wait..">
            {" "}
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback="Loading Please Wait..">
            {" "}
            <Login />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback="Loading Please Wait..">
            {" "}
            <Register />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
