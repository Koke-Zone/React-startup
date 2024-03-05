import RestCard from "./RestCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "./utilis/constaints";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utilis/useOnlineStatus";

const BodyResturanat = () => {
  let [myRestaurantList, setmyRestaurantList] = useState([]);
  const [filteredRes, setfilteredRes] = useState([]);

  let [inputVal, setinoutVal] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    setmyRestaurantList(
      jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredRes(
      jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // if(myRestaurantList.length === 0){
  //  return <Shimmer />
  // }

  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false) {
    return <h1>Something went wrong, chck your internet connection.!!!</h1>;
  }

  return myRestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-body">
      <div className="container">
        <div className="filer flex justify-between p-3 m-3">
          <div className="filterInput">
            <input
              type="Search"
              className="search rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search Food" 
              value={inputVal}
              onChange={(e) => {
                setinoutVal(e.target.value);
              }}
            />
            <button className="font-dancingScript text-cyan-50 bg-cyan-700 p-2 w-40 ml-2 rounded-md"
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
            className="text-yellow-50 bg-cyan-700 p-2 w-80 rounded-md font-dancingScript"
            onClick={() => {
              ResList = myRestaurantList.filter(
                (res) => res.info.avgRating > 4.5
              );
              setfilteredRes(ResList);
            }}
          >
            Top Rated Restuarants
          </button>
        </div>
        <div className="food-container flex justify-evently flex-wrap mt-10 mb-20 mx-auto p-1 border-cyan-50 w-10/12">
          {filteredRes.map((restaurantList) => (
            <Link className="w-1/4"
              key={restaurantList.info.id}
              to={"/resturants/" + restaurantList.info.id}
            >
              <RestCard propData={restaurantList} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyResturanat;
