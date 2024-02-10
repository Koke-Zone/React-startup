import { useState, useEffect } from "react";
import { RESTAPID } from "./utilis/constaints";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const ResturantDetails = () => {
  const [restData, setresData] = useState(null);

  // use this hook to get resId
  const { resId } = useParams();

  useEffect(() => {
    myApi();
  }, []);

  const myApi = async () => {
    const data = await fetch(RESTAPID + resId);
    const json = await data.json();
    const resturant_data = json.data;
    setresData(resturant_data);
  };

  if (restData === null) return <Shimmer />;
  const { name, cuisines, costForTwo } = restData?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restData?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards);
  return (
    <div className="rest-details">
      <div className="container">
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwo / 100} PKR
        </p>
        <div className="res-foods">
          {itemCards?.map((item) => {
            console.log(item?.card?.info?.name);
            return <p key={item?.card?.info?.id}>{item?.card?.info?.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ResturantDetails;
