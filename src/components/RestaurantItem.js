import { CDN_URL } from "../utils/constants";

const RestaurantItem = (props) => {
  const { name, defaultPrice, price, imageId } = props.itemInfo;
  return (
    <div className="w-72 m-4 p-4 transform transition duration-500 hover:scale-95">
      <img
        className="h-36 w-[100%] rounded-lg object-cover"
        src={`${CDN_URL}/${imageId}`}
        alt={name}
      />
      <div className="menu-item-detail">
        <h3 className="font-semibold">{name}</h3>
        <p>- ₹ {(defaultPrice ? defaultPrice : price) / 100}</p>
      </div>
    </div>
  );
};

export default RestaurantItem;
