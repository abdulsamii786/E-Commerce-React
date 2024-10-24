import React from "react";
import Slider from "react-slick";
import { bannerCarousel } from "../utils/constants/bannerImages";

const BannerCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <div className="slider-container container mx-auto">
      <Slider {...settings}>
        {bannerCarousel.map((item, key) => (
          <div key={key} className="container px-10 mx-auto  ">
            <img
              className="w-full h-[650px] object-cover rounded-lg"
              src={item.img}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default BannerCarousel;
