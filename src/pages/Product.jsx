import { useContext } from "react";
import Card from "../components/common/Card";
import TitleSection from "../components/common/TitleSection";
import ProductsContext from "../context/ProductsContext";
import { titleSectionData } from "../utils/constants/titleSectionData";

const Product = () => {
  const productsData = useContext(ProductsContext);
  const filteredCategories = productsData?.map((item) => item?.category);
  console.log(filteredCategories);

  const catName = new Set(...[filteredCategories]);
  console.log(catName);

  return (
    <div>
      <TitleSection data={titleSectionData[0]} />
      <div className="flex flex-wrap justify-between max-sm:justify-center container mx-auto px-10 ">
        {productsData?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Product;
