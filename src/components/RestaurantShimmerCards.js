const RestaurantShimmerCards = () => {
  const numOfCards = 12;
  const cardsArray = Array.from(Array(numOfCards).keys());
  return (
    <div className="flex flex-wrap justify-center">
      {cardsArray.map((index) => (
        <div
          className="w-72 h-72 m-4 p-4 shadow-lg"
          key={index + "restaurant-shimmer"}
        ></div>
      ))}
    </div>
  );
};

export default RestaurantShimmerCards;
