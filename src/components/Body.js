import { useState, useEffect } from 'react';
import RestaurantCard from "./RestaurantCard";
import ShimmerCards from './ShimmerCards';

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredResList,setFilteredResList] = useState([]);
    const [searchText, setSearchText] = useState(null);

    const fetchResList = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.4152338&lng=72.81314320000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let jsonData = await data.json();
        jsonData = jsonData.data.cards.filter(card=>card?.card?.card?.id==="top_brands_for_you")[0]?.card?.card;
        setResList(jsonData?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(jsonData?.gridElements?.infoWithStyle?.restaurants);
    };

    useEffect(() => {
        fetchResList();
    }, [] 
    );

    const filterRestList = (event) =>{
        event.preventDefault();
        setFilteredResList(prevState => prevState.filter(res=> res.info.avgRating>=4));
    };

    const onSearchHandler = () => {
        setFilteredResList(resList.filter(res => res.info.name.includes(searchText)))
    };

    return resList.length===0?<ShimmerCards/>:
        <div className="body">
            <div className="filter">
                <div>
                    <input type="text" onChange={event=>setSearchText(event.target.value)} value={searchText}/>
                    <button onClick={onSearchHandler}>Search</button>
                </div>
                <div className="top-rated-btn">
                    <button onClick={(event)=>filterRestList(event)}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="res-container">
                {filteredResList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant.info}/>)}
            </div>
        </div>;
};

export default Body;