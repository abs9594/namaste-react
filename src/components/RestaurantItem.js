import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../rtk/cartSlice";

const RestaurantItem = (props) => {
  const {
    name,
    defaultPrice,
    price,
    imageId,
    description,
    isVeg,
    isBestseller,
    ribbon,
  } = props.itemInfo;

  const dispatcher = useDispatch();

  const handleAddClick = (event) => {
    event.preventDefault();
    dispatcher(addItem(name));
  };

  return (
    <div className="flex justify-between m-auto p-10 border-b-2 border-gray-200">
      <div className="w-8/12">
        <h3 className="py-1 font-semibold text-lg">{name}</h3>
        <h4 className="py-1 text-yellow-300">
          {isVeg ? "🟢" : "🔴"}
          {isBestseller ? "⭐" + ribbon.text : null}
        </h4>
        <h4 className="py-1 font-semibold">
          ₹ {(defaultPrice ? defaultPrice : price) / 100}
        </h4>
        <h4 className="py-1 text-sm">{description}</h4>
      </div>
      <div className="w-2/12">
        <div
          className="absolute rounded-lg p-2 h-12 border border-gray-400 bg-white text-green-400"
          onClick={handleAddClick}
        >
          <button>Add +</button>
        </div>
        <img
          className="h-24 w-full rounded-lg object-cover"
          src={`${CDN_URL}/${imageId}`}
          alt={name}
        />
      </div>
    </div>
  );
};

export default RestaurantItem;
