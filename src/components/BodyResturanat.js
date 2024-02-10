import RestCard from "./RestCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "./utilis/constaints";
import { Link } from "react-router-dom";

const BodyResturanat = () => {
  let [myRestaurantList, setmyRestaurantList] = useState([]);
  const [filteredRes, setfilteredRes] = useState([]);

  let [inputVal, setinoutVal] = useState("");

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    const restaurants =
      jsonData.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setmyRestaurantList(restaurants);
    setfilteredRes(restaurants);
  };

  // if(myRestaurantList.length === 0){
  //  return <Shimmer />
  // }

  return myRestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-body">
      <div className="container">
        <div className="filer">
          <div className="filterInput">
            <input
              type="Search"
              className="search"
              value={inputVal}
              onChange={(e) => {
                setinoutVal(e.target.value);
              }}
            />
            <button
              onClick={() => {
                const filterResturanats = myRestaurantList.filter((res) =>
                  res.info.name.toLowerCase().includes(inputVal.toLowerCase())
                );
                setfilteredRes(filterResturanats);
              }}
            >
              Search
            </button>
          </div>

          <button
            className="btn-filter"
            onClick={() => {
              myRestaurantList = myRestaurantList.filter(
                (res) => res.info.avgRating > 4
              );
              setmyRestaurantList(myRestaurantList);
            }}
          >
            Top Rated Restuarants
          </button>
        </div>
        <div className="food-container">
          {filteredRes.map((restaurantList) => (
            <Link key={restaurantList.info.id} to={"/resturants/" + restaurantList.info.id}>
              <RestCard propData={restaurantList} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyResturanat;
