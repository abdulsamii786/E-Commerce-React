import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ modal, setModal, data }) => {
  const {
    title,
    price,
    description,
    brand,
    category,
    color,
    discount,
    id,
    image,
    model,
  } = data;

  return (
    <>
      {modal && (
        <div className="w-full h-[100vh] fixed bg-[#00000083] top-0 left-0 flex justify-center items-center z-[999999] ">
          <div className="w-[60%] bg-slate-500 h-[80vh] rounded-lg z-[999999] flex relative ">
            <span
              onClick={() => setModal(false)}
              className="absolute -right-3 bg-white p-1 text-xl  text-[#343d48] -top-3 cursor-pointer rounded-full"
            >
              <IoCloseSharp />
            </span>
            <div className="w-[45%]">
              <img
                className="w-full h-full object-contain"
                src={image}
                alt=""
              />
            </div>
            <div className="w-[55%] p-6">
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="">{description}</p>
              <div className="flex gap-5">
                <p className="font-bold textt-xl">${price}</p>
                {discount && (
                  <p className="font-bold textt-xl text-[#343d48]">
                    {discount}% OFF
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
