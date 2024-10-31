import { useContext, useEffect, useState } from "react";
import Card from "../components/common/Card";
import TitleSection from "../components/common/TitleSection";
import ProductsContext from "../context/ProductsContext";
import { titleSectionData } from "../utils/constants/titleSectionData";
import FeatureContext from "../context/FeatureContext";
import { useNavigate } from "react-router";

const Product = () => {
  const navigate = useNavigate();

  const productsData1 = useContext(ProductsContext);
  const productsData2 = useContext(FeatureContext);

  const [products, setProducts] = useState([]);

  const allProductsData = productsData2?.concat(productsData1);

  useEffect(() => {
    setProducts(allProductsData);
  }, [productsData1]);

  return (
    <div>
      <TitleSection data={titleSectionData[0]} />
      <div className="flex flex-wrap justify-between max-sm:justify-center container mx-auto px-10 ">
        {products?.map((item, index) => (
          <div
            onClick={() => navigate(`/products/${item.category}`)}
            key={index}
          >
            <Card data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
