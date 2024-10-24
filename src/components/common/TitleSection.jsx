import React from "react";

const TitleSection = ({ data, handleClick, handleText }) => {
  const { title, showMore } = data;
  return (
    <div className="container mx-auto px-10 my-10 flex justify-between items-center">
      <h2 className="text-3xl font-bold text-[#212121]">{title}</h2>
      {showMore && (
        <p
          onClick={handleClick}
          className="text-md font-normal text-blue-500 underline cursor-pointer"
        >
          {handleText}
        </p>
      )}
    </div>
  );
};

export default TitleSection;
