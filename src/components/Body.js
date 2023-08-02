import { useState } from 'react';
import { restauarantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [resList, setResList] = useState(restauarantList);

    const filterRestList = (event) =>{
        event.preventDefault()
        setResList(resList.filter(res=> res.info.avgRating>=4))
    };

    return (
        <div className="body">
            <div className="filter-btn">
                <button onClick={(event)=>filterRestList(event)}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant.info}/>)}
            </div>
        </div>
        );
};

export default Body;