import React from "react";
import { dualBanners } from "../utils/constants/bannerImages";
const DualBanner = () => {
  return (
    <div className="container mx-auto px-10 flex justify-between gap-8 mt-12 ">
      {dualBanners.map((item, key) => {
        return (
          <div key={key} className=" ">
            <img className=" object-cover h-[340px] w-[900px] rounded-lg " src={item.img} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default DualBanner;
