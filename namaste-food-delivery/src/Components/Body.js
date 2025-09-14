import resData from "../utilities/data";
import { useEffect, useState } from "react";
import {ResCard} from "./ResCard"
import ShimmerUi from "./ShimmerUi";
import useGetOnlineStatus from "../utilities/useGetOnlineStatus";
import { useContext } from "react";
import ResListContext from "../utilities/ResListContext";

const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [defaultResData, setDefaultResData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const {resList, setResData} = useContext(ResListContext);

    useEffect(()=>{
        fetchRestaurantsData()
    },[])

    const fetchRestaurantsData = async() => {
        if(resList.length === 0){
            const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.053222001893733&lng=77.03620623797178&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            if(json ?.data ?.cards[1] ?.card ?.card ?.gridElements){
                setRestaurantData(json ?.data ?.cards[1] ?.card ?.card ?.gridElements ?.infoWithStyle ?.restaurants);
                setDefaultResData(json ?.data ?.cards[1] ?.card ?.card ?.gridElements ?.infoWithStyle ?.restaurants);
                setResData(json ?.data ?.cards[1] ?.card ?.card ?.gridElements ?.infoWithStyle ?.restaurants);
            }
            else{
                setRestaurantData(json ?.data ?.cards[2] ?.card ?.card ?.gridElements ?.infoWithStyle ?.restaurants);
                setDefaultResData(json ?.data ?.cards[2] ?.card ?.card ?.gridElements ?.infoWithStyle ?.restaurants);
                setResData(json ?.data ?.cards[2] ?.card ?.card ?.gridElements ?.infoWithStyle ?.restaurants);
            }
        }
        else{
            setRestaurantData(resList);
            setDefaultResData(resList);
        }
    }

    const filterSearchRestaurants = () => {
        var filetrRes = defaultResData.filter(res => res.info.name.toUpperCase().includes(searchText.toUpperCase()));
        setRestaurantData(filetrRes);
    }

    const onlineStatus = useGetOnlineStatus()
    return !onlineStatus ? <div>Looks like You're offline. Please, check your internet connection.</div> :
        (
        <div>
            <div className="px-2 lg:px-8 pt-4">
                <input type="text" placeholder="Search Restaurants" className="px-4 py-1 border border-black" value={searchText} 
                    onChange={(e)=>setSearchText(e.target.value)}
                />
                <button className="bg-gray-400 px-2 py-1 rounded-lg mx-8" onClick={filterSearchRestaurants}>Search</button>
            </div>
            {restaurantData.length === 0 ? <ShimmerUi /> : 
                <div className="flex flex-wrap">
                {
                    restaurantData.map((res)=> <ResCard resInfo = {res.info} key={res.info.id} />)
                }
                </div>
            }
        </div>
    )
}
export default Body