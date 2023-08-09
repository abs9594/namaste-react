import { CDN_URL } from "../utils/constants";

const RestaurantItem = (props) => {
  const { name, defaultPrice, price, imageId } = props.itemInfo;
  return (
    <div className="menu-item-container">
      <img
        className="menu-item-image"
        src={`${CDN_URL}/${imageId}`}
        alt={name}
      />
      <div className="menu-item-detail">
        <h3>{name}</h3>
        <p>- Rs.{(defaultPrice ? defaultPrice : price) / 100}</p>
      </div>
    </div>
  );
};

export default RestaurantItem;
