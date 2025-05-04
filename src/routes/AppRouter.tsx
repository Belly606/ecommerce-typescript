import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Layouts
import { MainLayout } from "@layouts/index";

// Pages
import Home from "@pages/Home";
import AboutUs from "@pages/AboutUs";
import Categories from "@pages/Categories";
import Product from "@pages/Products";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Error from "@pages/Error";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about-us", element: <AboutUs /> },
        { path: "/categories", element: <Categories /> },
        {
          path: "/categories/products/:prefix",
          element: <Product />,
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
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
