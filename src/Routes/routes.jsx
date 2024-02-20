import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AdminLogin from "../Pages/Login/AdminLogin";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddProducts from "../Components/Dashboard/Products/AddProducts/AddProducts";
import Products from "../Components/Dashboard/Products/Products";
import AddPromoCodes from "../Components/Dashboard/Promotions/AddPromoCodes/AddPromoCodes";
import Promotions from "../Components/Dashboard/Promotions/Promotions";
import Orders from "../Components/Dashboard/Orders/Orders";
import Homepage from "../Pages/Homepage/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div>error</div>,

    children: [{ path: "/", element: <Homepage /> }],
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
    children: [
      {
        path: "/dashboard/promotion",
        // element: <div>Promotion</div>,
      },
      {
        path: "/dashboard/orders",
        element: <Orders />,
      },
      {
        path: "/dashboard/products",
        element: <Products />,
      },
      {
        path: "/dashboard/products/add-product",
        element: <AddProducts />,
      },
      {
        path: "/dashboard/products/update/:id",
        element: <AddProducts />,
      },
      {
        path: "/dashboard/promotion/codes",
        element: <Promotions />,
      },
      {
        path: "/dashboard/promotion/add",
        element: <AddPromoCodes />,
      },
      {
        path: "/dashboard/promotion/update/:id",
        element: <AddPromoCodes />,
      },
    ],
  },
  // {
  //   path: "/dashboard",

  //   element: <></>,
  //   children: [],
  // },
]);
