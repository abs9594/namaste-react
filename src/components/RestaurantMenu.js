import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import RestaurantItem from "./RestaurantItem";
import MenuItemsShimmerCards from "./MenuItemsShimmerCards";

const RestaurantMenu = () => {
  const [menuInfo, setMenuInfo] = useState([]);
  let { resId } = useParams();

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const jsonData = await data.json();
    flattenMenu(jsonData);
  };

  const flattenMenu = (jsonData) => {
    const allMenuCategoryJson =
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    let allMenuCategory = allMenuCategoryJson.filter(
      (card) => card?.card?.card?.itemCards,
    );
    allMenuCategory = allMenuCategory.map((card) => card.card.card.itemCards);
    let flattenedMenu = [];
    for (const category of allMenuCategory) {
      for (const card of category) {
        flattenedMenu.push(card.card.info);
      }
    }
    setMenuInfo(flattenedMenu);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return menuInfo.length === 0 ? (
    <MenuItemsShimmerCards />
  ) : (
    <div className="menu-container">
      {menuInfo.map((item, index) => (
        <RestaurantItem key={item.id + index} itemInfo={item} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
