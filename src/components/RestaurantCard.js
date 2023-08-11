import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    props.resData;

  return (
    <div className="w-72 m-4 p-4 transform transition duration-500 hover:scale-95">
      <img
        className="h-36 w-[100%] rounded-lg object-cover"
        src={`${CDN_URL}/${cloudinaryImageId}`}
        alt="res-logo"
      />
      <h3 className="font-semibold">{name}</h3>
      <h4 className="overflow-ellipsis overflow-hidden whitespace-nowrap">
        {cuisines.join(",")}
      </h4>
      <h4 className="font-semibold">{`⭐ ${avgRating}`}</h4>
      <h4>{costForTwo}</h4>
      <h4>🕒 {props.resData.sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
