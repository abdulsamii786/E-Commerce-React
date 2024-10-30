import { useContext, useEffect, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import Card from "../components/common/Card";
import FeatureContext from "../context/FeatureContext";
import BannerCarousel from "../components/BannerCarousel";
import TitleSection from "../components/common/TitleSection";
import DualBanner from "../components/DualBanner";
import { titleSectionData } from "../utils/constants/titleSectionData";
import { categoryCardsData } from "../utils/constants/categoryCard";
import Modal from "../components/common/Modal";
import Slider from "react-slick";

const Home = () => {
  const productsData1 = useContext(ProductsContext);
  const productsData2 = useContext(FeatureContext);

  const [products, setProducts] = useState([]);

  const allProductsData = productsData2?.concat(productsData1);

  useEffect(() => {
    setProducts(allProductsData);
  }, [productsData1, productsData2]);

  const categories = allProductsData?.map((item) => item?.category);
  const categoriesTitle = new Set(...[categories]);
  console.log(categoriesTitle);

  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  const findModalData = (id) => {
    const findData = allProductsData?.find((item) => item.id == id);
    setIsModal(true);
    setModalData(findData);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div>
      <BannerCarousel />
      <DualBanner />
      <TitleSection data={titleSectionData[0]} />
      <div className="slider-container  container mx-auto px-10">
        <Slider {...settings}>
          {categoryCardsData.map((item, index) => {
            return (
              <div
                className="border py-6 w-[100px] rounded-lg hover:-translate-y-2 hover:shadow-lg duration-500 cursor-pointer"
                key={index}
              >
                <div className="flex flex-col justify-center items-center gap-7">
                  <span className="text-7xl ">{item.img}</span>
                  <span className="text-xl">{item.title}</span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <TitleSection data={titleSectionData[1]} show={true} />
      <div className="flex flex-wrap justify-between max-sm:justify-center container mx-auto px-10 ">
        {products?.slice(0, 10).map((item) => (
          <div key={item.id} onClick={() => findModalData(item.id)}>
            <Card data={item} />
          </div>
        ))}
      </div>
      <Modal modal={isModal} setModal={setIsModal} data={modalData} />
    </div>
  );
};

export default Home;
