import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AdminLogin from "../Pages/Login/AdminLogin";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddProducts from "../Components/Dashboard/Products/AddProducts";
import Products from "../Components/Dashboard/Products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div>error</div>,

    children: [{ path: "/", element: <div>main</div> }],
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
        element: <div>Orders</div>,
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
        element: <div>Promo Codes</div>,
      },
      {
        path: "/dashboard/promotion/add",
        element: <div>Add Promo</div>,
      },
    ],
  },
  // {
  //   path: "/dashboard",

  //   element: <></>,
  //   children: [],
  // },
]);
