import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);
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

  return menuInfo;
};

export default useRestaurantMenu;
