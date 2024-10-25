import axios from "axios";
import {  createContext, useEffect, useState } from "react";

export const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
   const [products,setProducts]=useState(null)

  const getData = async () => {
    const response = await axios.get(
      "https://fakestoreapi.in/api/products"
    );
setProducts(response?.data?.products)
setProducts(response?.data?.products)

  };

  useEffect(() => {
    getData();
  }, []);


  return <div>
    <ProductsContext.Provider value={products}>
      {children}
</ProductsContext.Provider>
  </div>;
};

export default ProductsContext;
