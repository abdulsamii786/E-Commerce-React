/* eslint-disable react/prop-types */

const Card = ({ data }) => {
  const { title, price, description } = data;
  const { image, name } = data?.category;
  return (
    <div className="w-[260px] text-[#212121] hover:-translate-y-3 transition-transform duration-500 hover:shadow-xl mb-5 rounded-lg cursor-pointer">
      <div>
        <img className="rounded-lg " src={image} />
      </div>
      <div className="p-3">
        <h3 className="text-lg font-bold">{title.slice(0,20) + "..."}</h3>
        <p className="text-[#5a5a5a] text-[15px] leading-loose">
          {description.slice(0, 30) + "..."}
        </p>
        <p className="text-xl font-bold leading-loose mb-1">${price}</p>
      </div>
    </div>
  );
};

export default Card;
