import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import FeatureContext from "../context/FeatureContext";
import ProductsContext from "../context/ProductsContext";
import Card from "../components/common/Card";
import TitleSection from "../components/common/TitleSection";

const ProductList = () => {
  const { category } = useParams();

  const productsData1 = useContext(ProductsContext);
  const productsData2 = useContext(FeatureContext);

  const allProductsData = productsData2?.concat(productsData1);

  useEffect(() => {
    setProducts(allProductsData);
  }, [productsData1]);

  const categoryList = allProductsData?.filter(
    (item) => item?.category == category
  );
  console.log(categoryList);

  return (
    <div>
      <div className="container mx-auto px-10 my-10 max-sm:my-3 flex justify-between items-center max-sm:px-2">
        <h2 className="text-3xl font-bold text-[#212121] max-sm:text-xl">
          {category}
        </h2>
      </div>

      <div className="flex flex-wrap justify-between max-sm:justify-center container mx-auto px-10 ">
        {categoryList?.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
