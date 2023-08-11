import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantShimmerCards from "./RestaurantShimmerCards";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const fetchResList = async () => {
    if (!onlineStatus) return;
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4152338&lng=72.81314320000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    let jsonData = await data.json();
    jsonData = jsonData.data.cards.filter(
      (card) => card?.card?.card?.id === "restaurant_grid_listing",
    )[0]?.card?.card;
    setResList(jsonData?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResList(jsonData?.gridElements?.infoWithStyle?.restaurants);
  };

  useEffect(() => {
    fetchResList();
  }, []);

  const filterRestList = (event) => {
    event.preventDefault();
    setFilteredResList((prevState) =>
      prevState.filter((res) => res.info.avgRating >= 4),
    );
  };

  const onSearchHandler = () => {
    setFilteredResList(
      resList.filter((res) =>
        res?.info?.name?.toLowerCase().includes(searchText),
      ),
    );
  };
  console.log(onlineStatus);
  return !onlineStatus ? (
    <h1>You are offline</h1>
  ) : (
    <div className="m-auto font-serif">
      <div className="flex items-center">
        <div className="m-4 p-4">
          <input
            className="rounded-md border border-solid border-black m-2"
            type="text"
            onChange={(event) =>
              setSearchText(event.target.value.toLocaleLowerCase())
            }
            value={searchText}
          />
          <button
            className="px-4 py-1 bg-green-200 m-2 rounded-md"
            onClick={onSearchHandler}
          >
            Search
          </button>
        </div>
        <div className="px-4 py-1 bg-gray-200 m-2 rounded-md">
          <button onClick={(event) => filterRestList(event)}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      {resList.length === 0 ? (
        <RestaurantShimmerCards />
      ) : (
        <div className="flex flex-wrap justify-center">
          {filteredResList.map((restaurant) => (
            <Link to={`/${restaurant.info.id}`} key={restaurant.info.id}>
              <RestaurantCard resData={restaurant.info} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
