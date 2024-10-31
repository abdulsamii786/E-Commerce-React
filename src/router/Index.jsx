import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductList from "../pages/ProductsList";
import ProductsLayout from "../layout/ProductsLayout";

export const Index = () => [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/products",
    element: <ProductsLayout />,
    children: [
      {
        path: "/products/:category",
        element: <ProductList />,
      },
    ],
  },
];
