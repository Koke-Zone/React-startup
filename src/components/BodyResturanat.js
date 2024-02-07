import RestCard from "./RestCard";
import { restaurantList } from "./utilis/mockData";
import { useState } from "react";

const BodyResturanat = () => {
  let [myRestaurantList, setmyRestaurantList] = useState(restaurantList);

  return (
    <div className="main-body">
      <div className="container">
        <div className="filer">
          <button
            className="btn-filter"
            onClick={() => {
              myRestaurantList = myRestaurantList.filter(
                (res) => res.data.avgRating > 3
              );
              setmyRestaurantList(myRestaurantList);
            }}
          >
            Search
          </button>
        </div>
        <div className="food-container">
          {myRestaurantList.map((restaurantList) => (
            <RestCard key={restaurantList.data.id} propData={restaurantList} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyResturanat;
