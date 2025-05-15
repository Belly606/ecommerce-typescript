import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Layouts
const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));

// Components
import { PageSuspenseFallback } from "@components/feedback";

// Lottie Animation
import { LottieHandler } from "@components/feedback";

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
        <Suspense
          fallback={
            <div style={{ marginTop: "10%" }}>
              <LottieHandler type="loading" message="Loading pleas wait..." />
            </div>
          }
        >
          <MainLayout />
        </Suspense>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: (
            <PageSuspenseFallback>
              <Home />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/wishlist",
          element: (
            <PageSuspenseFallback>
              <Wishlist />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/cart",
          element: (
            <PageSuspenseFallback>
              <Cart />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/about-us",
          element: (
            <PageSuspenseFallback>
              <AboutUs />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/categories",
          element: (
            <PageSuspenseFallback>
              <Categories />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/categories/products/:prefix",
          element: (
            <PageSuspenseFallback>
              <Products />
            </PageSuspenseFallback>
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
            <PageSuspenseFallback>
              <Register />
            </PageSuspenseFallback>
          ),
        },
        {
          path: "/login",
          element: (
            <PageSuspenseFallback>
              <Login />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
