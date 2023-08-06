const MenuItemsShimmerCards = () => {
  const numOfCards = 20;
  const cardsArray = Array.from(Array(numOfCards).keys());
  return (
    <div className="menu-container">
      {cardsArray.map((index) => (
        <div
          key={index + "menu-item-container"}
          className="menu-item-container"
        ></div>
      ))}
    </div>
  );
};

export default MenuItemsShimmerCards;
