import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenuCategories = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);
  const [restaurantInfo, setRestaurantIfo] = useState(null);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const jsonData = await data.json();
    setRestaurantIfo(jsonData?.data?.cards[0]?.card?.card?.info);
    flattenMenu(jsonData);
  };

  const flattenMenu = (jsonData) => {
    const allMenuCategoryJson =
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    let allCategoriesMenu = allMenuCategoryJson.filter(
      (card) => card?.card?.card?.itemCards,
    );
    setMenuInfo(allCategoriesMenu);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [restaurantInfo, menuInfo];
};

export default useRestaurantMenuCategories;
