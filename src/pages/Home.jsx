import { useContext, useState } from "react";
import Header from "../components/Header";
import ProductsContext from "../context/ProductsContext";
import Card from "../components/common/Card";
import FeatureContext from "../context/FeatureContext";
import BannerCarousel from "../components/BannerCarousel";
import TitleSection from "../components/common/TitleSection";
import DualBanner from "../components/DualBanner";
import { titleSectionData } from "../utils/constants/titleSectionData";

const Home = () => {
  const productsData = useContext(ProductsContext);
  const featuresCard = useContext(FeatureContext);

  console.log(featuresCard);

  const [showAll, setShowAll] = useState(false);
  const [productsExpanded, setProductsExpended] = useState("See All Products");

  const handleSeeAll = () => {
    setShowAll(!showAll);
    showAll
      ? setProductsExpended("See All Products")
      : setProductsExpended("View Less");
    // : setProductsExpended("See All Products");
  };

  console.log(productsData);
  return (
    <div>
      <Header />
      <BannerCarousel />
      <DualBanner />
      <TitleSection
        data={titleSectionData[0]}
        handleClick={handleSeeAll}
        handleText={productsExpanded}
      />
      <div className="flex flex-wrap justify-between container mx-auto px-10 ">
        {showAll
          ? productsData?.map((item) => <Card key={item.id} data={item} />)
          : productsData
              ?.slice(0, 10)
              .map((item) => <Card key={item.id} data={item} />)}
      </div>
      <TitleSection data={titleSectionData[1]} />
    </div>
  );
};

export default Home;
