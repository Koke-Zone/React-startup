// import { useState, useEffect } from "react";
// import { RESTAPID } from "./utilis/constaints";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturantDetails from "./utilis/useResturantDetails";
import RestuarantCategories from "./ResturantCategories";
import { useState } from "react";

const ResturantDetails = () => {
  // const [restData, setresData] = useState(null);

  // use this hook to get resId
  const { resId } = useParams();
  const restData = useResturantDetails(resId);


  const [showIndex, setshowIndex] = useState(null);

  // useEffect(() => {
  //   myApi();
  // }, []);

  // const myApi = async () => {
  //   const data = await fetch(RESTAPID + resId);
  //   const json = await data.json();
  //   const resturant_data = json.data;
  //   setresData(resturant_data);
  // };

  if (restData === null) return <Shimmer />;
  const { name, cuisines, costForTwo } = restData?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restData?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories =
    restData?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (type) =>
        type?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="rest-details">
      <div className="container">
        <h1 className="mt-5 bg-customPink uppercase font-semibold tracking-wider text-3xl m-4 p-4 text-white text-xl text-center">
          {name}
        </h1>
        <p className="mb-5 text-center">
          {cuisines.join(", ")} - {costForTwo / 100} PKR
        </p>
        <div className="res-foods">
          {categories.map((cat, index) => (
            <RestuarantCategories
              key={cat?.card?.card?.title}
              data={cat?.card?.card}
              // toggleValue = {index === 0 && false}
              toggleValue = {index === showIndex ? true : false}
              setshowIndex = {() => {setshowIndex(index)}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResturantDetails;
