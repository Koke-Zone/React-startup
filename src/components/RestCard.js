import { RES_URL_PIC } from "./utilis/constaints";
import star from "../../assets/images/star.png";
import UserContext from "./utilis/userContext";
import { useContext } from "react";


const RestCard = (props) => {

  const {loggedUser} = useContext(UserContext);

  const { propData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    propData.info;
  const { slaString } = propData.info.sla;
  return (
    <div className="food-card m-2 p-4 border-2 rounded-md h-84">
      <img
        src={RES_URL_PIC + cloudinaryImageId}
        alt="food-image"
        className="rounded-md w-full h-36 mb-3"
      />
      <span className="price ml-2">{costForTwo}</span>
      <h3 className="text-yellow truncate text-xl ml-2 my-2 font-bold text-cyan-700">
        {name}
      </h3>
      <span className="flex items-center ml-2">
        <img src={star} className="w-5 mr-1" alt="star" />
        &nbsp;{avgRating} •&nbsp;
        {slaString}
      </span>
      <p className="my-3 mx-2 truncate">{cuisines.join(", ")}</p>
      <p>{loggedUser}</p>
    </div>
  );
};

export const promotedData = (RestCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-cyan-700 m-2 p-2 rounded-md text-white top-2.5 left-4">
          Discount
        </label>
        <RestCard {...props} />
      </div>
    );
  };
};

export default RestCard;
