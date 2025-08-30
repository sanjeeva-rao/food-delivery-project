import resData from "../utilities/data";
import { useEffect, useState } from "react";
import {ResCard} from "./ResCard"
const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    useEffect(()=>{
        setRestaurantData(resData);
    },[])
    return (
        <div className="flex flex-wrap">
            {
                restaurantData.map((res)=> <ResCard resInfo = {res.info} key={res.info.id} />)
            }
        </div>
    )
}
export default Body