import { RES_URL_PIC } from "./utilis/constaints";

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
      <h3>{name}</h3>
      <span>{cuisines.join(", ")}</span>
      <span>
        Rating: &nbsp;<b>{avgRating} stars</b>
      </span>
      <span>
        Delivery Time: &nbsp;<b>{slaString}</b>
      </span>
      <span>
        Price: &nbsp;<b>{costForTwo}</b>
      </span>
    </div>
  );
};

export default RestCard;
