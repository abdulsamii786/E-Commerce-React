import React from "react";
import { dualBanners } from "../utils/constants/bannerImages";
const DualBanner = () => {
  return (
    <div className="container mx-auto px-10 flex justify-between gap-8 mt-12 max-sm:mt-0 max-sm:px-2 max-sm:gap-2">
      {dualBanners.map((item, key) => {
        return (
          <div key={key} className="w-[50%] ">
            <img className=" object-cover h-[340px] w-[900px] rounded-lg max-sm:h-[100px] " src={item.img} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default DualBanner;
