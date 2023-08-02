import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = props.resData;
    return (<div className="res-card">
        <img className="res-logo"
             src={`${CDN_URL}/${cloudinaryImageId}`}
             alt="res-logo"/>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{`${avgRating} star`}</h4>
        <h4>{costForTwo}</h4>
        <h4>{props.resData.sla.slaString}</h4>
    </div>
)};

export default RestaurantCard;