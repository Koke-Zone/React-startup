import { RES_URL_PIC } from "./utilis/constaints";
import star from "../../assets/images/star.png";

const RestCard = (props) => {
  const { propData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    propData.info;
  const { slaString } = propData.info.sla;
  return (
    <div className="food-card">
      <img
        src={RES_URL_PIC + cloudinaryImageId}
        alt="food-image"
        width={250}
        height={150}
      />
       <span className="price">
        <b>{costForTwo}</b>
      </span>
      <h3>{name}</h3>
      <span>
        <img src= {star} width={22} height={20} alt="star" />
        &nbsp;<b>{avgRating} </b> &nbsp;•&nbsp; 
        <b>{slaString}</b>
      </span>
      <span>{cuisines.join(", ")}</span>
     
    </div>
  );
};

export default RestCard;
