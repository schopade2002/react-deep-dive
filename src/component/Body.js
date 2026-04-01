import ResturantCart from "./ResturantCart";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";
const Body = () => {
  const [resturantList, setResturantList] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204&lng=73.8567",
    );
    const json = await data.json();
    console.log(
      "data here in object",
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setResturantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
    );
  };
   useEffect(() => {
    fetchData();
  }, []);
  console.log("render body called");
  if(resturantList.length === 0){
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdata = resturantList.filter(
              (res) => res.info.avgRating > 4,
            );
            console.log(resturantList);
            setResturantList(filterdata);
            console.log(filterdata);
          }}
        >
          Top rated resturant
        </button>
      </div>
      <div className="res-container">
        
        {resturantList?.map((resturant) => (
  <ResturantCart key={resturant.info.id} resData={resturant} />
))}
      </div>
    </div>
  );
};
export default Body;
