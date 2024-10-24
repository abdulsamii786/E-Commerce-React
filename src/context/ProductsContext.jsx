import axios from "axios";
import {  createContext, useEffect, useState } from "react";

export const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
   const [products,setProducts]=useState(null)

  const getData = async () => {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );
setProducts(response?.data)

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
