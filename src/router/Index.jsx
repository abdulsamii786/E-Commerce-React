import Home from "../pages/Home";
import Product from "../pages/Product";

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
];
