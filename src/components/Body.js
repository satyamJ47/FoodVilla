import { IMG_CDN_URL, restaurantList } from "../config";

const Searchbar = () => {
  return (
    <div>
      <form>
        <input placeholder="Search"></input>
        <button>Search</button>
      </form>
    </div>
  );
};

/*real swiggy api data*/
const RestaurantCard = ({ rest }) => {
  const { name, cloudinaryImageId, avgRating, cuisines } = rest;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{avgRating} stars</h3>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-container">
      <Searchbar />
      <div className="restaurat-cards">
        {
        restaurantList.map((rest)=>{
          return <RestaurantCard rest={...rest.info}/>
        })
        }
      </div>
    </div>
  );
};

export default Body;
