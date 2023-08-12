import { useState } from "react";
import RestaurantItem from "./RestaurantItem";

const RestaurantCategory = (props) => {
  const handleOnclick = () => {
    props.setShowItemCategoryIndex((prevState) => {
      if ((prevState === null) | (prevState !== props.index))
        return props.index;
      return null;
    });
  };
  return (
    <div key={props.categoryInfo.title}>
      <div
        className="flex justify-between items-center border-b-2 border-gray-400 cursor-pointer"
        onClick={() => handleOnclick()}
      >
        <span className="text-lg text-center font-semibold p-2 my-1">
          {props.categoryInfo.title} ({props.categoryInfo?.itemCards?.length})
        </span>
        <span>{!props.showItemCategoryList ? "⏬" : "⏫"}</span>
      </div>
      <div>
        {!props.showItemCategoryList
          ? null
          : props.categoryInfo?.itemCards.map((card) => (
              <RestaurantItem
                key={card.card.info.id}
                itemInfo={card.card.info}
              />
            ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
