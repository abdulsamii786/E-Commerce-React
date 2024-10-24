/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const FeatureContext = createContext();

export const FeatureProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  const getData = async () => {
    const response = await axios.get(
      " https://api.escuelajs.co/api/v1/categories"
    );
    setProducts(response?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <FeatureContext.Provider value={products}>
        {children}
      </FeatureContext.Provider>
    </div>
  );
};

export default FeatureContext;
