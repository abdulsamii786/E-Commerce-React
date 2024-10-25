import { useContext, useState } from "react";
import Header from "../components/Header";
import ProductsContext from "../context/ProductsContext";
import Card from "../components/common/Card";
import FeatureContext from "../context/FeatureContext";
import BannerCarousel from "../components/BannerCarousel";
import TitleSection from "../components/common/TitleSection";
import DualBanner from "../components/DualBanner";
import { titleSectionData } from "../utils/constants/titleSectionData";
import { categoryCardsData } from "../utils/constants/categoryCard";

const Home = () => {
  const productsData = useContext(ProductsContext);
  const featuresCard = useContext(FeatureContext);

  // console.log(featuresCard);

  const filteredCategories = productsData?.map((item) => item?.category);
  console.log(filteredCategories);

  const catName = new Set(...[filteredCategories]);
  console.log(catName);

  return (
    <div>
      <BannerCarousel />
      <DualBanner />
      <TitleSection data={titleSectionData[0]} />
      <div className="flex">
        {categoryCardsData.map((item, index) => {
          return (
            <div key={index} >
              <span className="text-9xl">{item.img}</span>
            </div>
          );
        })}
      </div>

      <TitleSection data={titleSectionData[1]} show={true} />
      <div className="flex flex-wrap justify-between container mx-auto px-10 ">
        {productsData?.slice(0, 10).map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
