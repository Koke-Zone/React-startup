import { RES_URL_PIC } from "./utilis/constaints";
const RestCard = (props) => {
  const { propData } = props;
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwoString,
    cloudinaryImageId,
  } = propData.data;
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
        Rating: &nbsp;<b>{avgRating}</b>
      </span>
      <span>
        Delivery Time: &nbsp;<b>{deliveryTime} minutes</b>
      </span>
      <span>
        Price: &nbsp;<b>{costForTwoString}</b>
      </span>
    </div>
  );
};

export default RestCard;
