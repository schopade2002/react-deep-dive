import ResturantCart from "./ResturantCart";
import reslist from "../utils/MockData";
import { useState } from "react";
const Body = () => {
    const [resturantList, setResturantList] = useState(reslist);
// let resturantList = [

//     {
//      info: {
//       id: "456789",
//       name: "Spice Kingdom",
//       cloudinaryImageId: "biryani123",
//       locality: "Camp",
//       areaName: "South Pune",
//       costForTwo: "₹500 for two",
//       cuisines: ["Indian", "Biryani"],
//       avgRating: 3.1,
        
//     },
// },
//  {
//      info: {
//       id: "456799",
//       name: "Spice Kingdom",
//       cloudinaryImageId: "biryani123",
//       locality: "Camp",
//       areaName: "South Pune",
//       costForTwo: "₹500 for two",
//       cuisines: ["Indian", "Biryani"],
//       avgRating: 4.1,
        
//     },
// },
// {
//      info: {
//       id: "456768",
//       name: "domonio",
//       cloudinaryImageId: "biryani123",
//       locality: "Camp",
//       areaName: "South Pune",
//       costForTwo: "₹500 for two",
//       cuisines: ["Indian", "Biryani"],
//       avgRating: 4.2,
        
//      }
//      }
    
// ]

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
            const filterdata = resturantList.filter((res)=> res.info.avgRating>4 );
        console.log(resturantList);
        setResturantList(filterdata);
        console.log(filterdata);
        }}>Top rated resturant</button>
      </div>
      <div className="res-container">
        {resturantList.map((resturant) => (
          <ResturantCart key={resturant.info.id} resData={resturant} />
        )
      
        )}
      </div>
    </div>
  );
};
export default Body;
