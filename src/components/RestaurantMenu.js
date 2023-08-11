import { useParams } from "react-router-dom";
import RestaurantItem from "./RestaurantItem";
import MenuItemsShimmerCards from "./MenuItemsShimmerCards";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuInfo = useRestaurantMenu(resId);

  return !menuInfo ? (
    <MenuItemsShimmerCards />
  ) : (
    <div className="flex flex-wrap">
      {menuInfo.map((item, index) => (
        <RestaurantItem key={item.id + index} itemInfo={item} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
