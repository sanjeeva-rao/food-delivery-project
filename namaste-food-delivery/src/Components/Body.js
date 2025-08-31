import resData from "../utilities/data";
import { useEffect, useState } from "react";
import {ResCard} from "./ResCard"
const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [defaultResData, setDefaultResData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        setRestaurantData(resData);
        setDefaultResData(resData);
    },[])

    const filterSearchRestaurants = () => {
        var filetrRes = defaultResData.filter(res => res.info.name.toUpperCase().includes(searchText.toUpperCase()));
        setRestaurantData(filetrRes);
    }

    return (
        <div>
            <div className="px-2 lg:px-8 pt-4">
                <input type="text" placeholder="Search Restaurants" className="px-4 py-1 border border-black" value={searchText} 
                    onChange={(e)=>setSearchText(e.target.value)}
                />
                <button className="bg-gray-400 px-2 py-1 rounded-lg mx-8" onClick={filterSearchRestaurants}>Search</button>
            </div>
            <div className="flex flex-wrap">
            {
                restaurantData.map((res)=> <ResCard resInfo = {res.info} key={res.info.id} />)
            }
        </div>
        </div>
    )
}
export default Body