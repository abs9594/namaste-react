const MenuItemsShimmerCards = () => {
  const numOfCards = 12;
  const cardsArray = Array.from(Array(numOfCards).keys());
  return (
    <div className="flex flex-wrap">
      {cardsArray.map((index) => (
        <div
          key={index + "menu-item-container"}
          className="w-72 h-44 m-4 p-4 shadow-lg rounded-lg"
        ></div>
      ))}
    </div>
  );
};

export default MenuItemsShimmerCards;
