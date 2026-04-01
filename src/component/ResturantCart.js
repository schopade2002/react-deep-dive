
import { IMG_CDN_URL } from "../utils/constants";

const ResturantCart = (props) => {
  const { resData } = props;
  const { name, cuisines, locality, avgRating, costForTwo } = resData?.info;

  return (
    <div className="res-cart">
     <img
  className="logo-res"
  alt="food image"
  src={IMG_CDN_URL + resData?.info?.cloudinaryImageId}
/>
      <h3>{name}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h3>{locality}</h3>
      <h3>cost for two people: {costForTwo}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};

export default ResturantCart;