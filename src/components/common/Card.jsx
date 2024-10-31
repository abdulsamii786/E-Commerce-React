/* eslint-disable react/prop-types */

const Card = ({data}) => {
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
    <div className="w-[260px] text-[#212121] duration-300 hover:shadow-xl mb-5 rounded-lg cursor-pointer border border-gray-200 overflow-hidden group">
      <div>
        <img
          className="rounded-lg transition-transform duration-500 group-hover:scale-105 object-contain w-full h-[200px]"
          src={image}
        />
      </div>
      <div className="p-3">
        <h3 className="text-lg font-bold">{title?.slice(0, 20) + "..."}</h3>
        <p className="text-[#5a5a5a] text-[15px] leading-loose">
          {description.slice(0, 50) + "..."}
        </p>
        <p className="text-xl font-bold leading-loose mb-1">${price}</p>
      </div>
    </div>
  );
};

export default Card;
