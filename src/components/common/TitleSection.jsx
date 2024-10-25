import React from "react";
import { useNavigate } from "react-router";

const TitleSection = ({ data, show }) => {
  const navigate = useNavigate();

  const { title, showMore } = data;
  return (
    <div className="container mx-auto px-10 my-10 flex justify-between items-center">
      <h2 className="text-3xl font-bold text-[#212121]">{title}</h2>
      {showMore && show && (
        <p
          onClick={() => navigate("/products")}
          className="text-md font-normal text-blue-500 underline cursor-pointer"
        >
          See All Products
        </p>
      )}
    </div>
  );
};

export default TitleSection;
