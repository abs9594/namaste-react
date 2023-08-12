import { useParams } from "react-router-dom";
import useRestaurantMenuCategories from "../utils/useRestaurantMenuCategories";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showItemCategoryIndex, setShowItemCategoryIndex] = useState(null);
  const [restaurantInfo, menuCategories] = useRestaurantMenuCategories(resId);
  return !menuCategories ? null : (
    <div className="w-8/12 m-auto">
      <div className="flex justify-between px-2 border-b-2 py-4 border-dotted border-gray-400">
        <div className="">
          <h1 className="font-bold text-2xl">{restaurantInfo.name}</h1>
          <h4 className="py-1 overflow-ellipsis overflow-hidden whitespace-nowrap text-sm">
            {restaurantInfo?.cuisines.join(",")}
          </h4>
          <h4 className="py-1">
            {restaurantInfo.areaName},{" "}
            {restaurantInfo?.sla?.lastMileTravelString}🔻
          </h4>
          <h4 className="py-1 font-semibold">
            🕒 {restaurantInfo.sla.slaString}
          </h4>
        </div>
        <div>
          <div className="border-green-400 border p-2 rounded-lg text-center">
            <h4 className="font-semibold py-1 border-b-2 border-gray-200">{`⭐ ${restaurantInfo?.avgRating}`}</h4>
            <h4 className="py-1">{restaurantInfo?.totalRatingsString}</h4>
          </div>
          <div>
            <h4 className="py-1 font-semibold">
              {restaurantInfo.costForTwoMessage}
            </h4>
          </div>
        </div>
      </div>
      <div>
        {menuCategories.map((category, index) => (
          <div key={category.card.card.title}>
            <RestaurantCategory
              index={index}
              categoryInfo={category.card.card}
              showItemCategoryList={
                showItemCategoryIndex === index ? true : false
              }
              setShowItemCategoryIndex={setShowItemCategoryIndex}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
