import { useEffect, useState } from "react";
import { MenuApi } from "../utilities/constants";
import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import MenuCards from "./MenuCards";
const ResMenu = () => {
    const [menuData, setMenuData] = useState(null);
    const [resDetails, setResDetails] = useState(null);
    useEffect(()=>{
        fetchMenuItems();
    },[])
    const {resId} = useParams();
    const fetchMenuItems = async()=>{
        const data = await fetch(MenuApi+resId);
        const json = await data.json();
        var resNeeded = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(resCard => resCard.card.card.title && resCard.card.card.itemCards);
        setMenuData(resNeeded);
        setResDetails(json?.data?.cards[2]?.card?.card)
    }
    return menuData && resDetails ? <div>
        <div className="ml-[4%] my-2 px-4 py-4 shadow-2xl w-[90%]">
            <div className="font-bold text-xl">{resDetails.info.name}</div>
            <div>{resDetails.info.avgRating} (Rating) {resDetails.info.costForTwoMessage}</div>
            <div>{resDetails.info.cuisines.join(",")}</div>
            <div>{resDetails.info.locality}</div>
        </div>
        {resDetails.info.veg && <div className="text-green-500 bg-gray-300 w-48 px-4 py-1 rounded-lg ml-[4%] mt-4">Pure Veg Restaurant</div>}
        { menuData.map(resCard => <MenuCards resCard = {resCard.card.card} key={resCard.card.card.title}/>) }
    </div>
     : <ShimmerUi />
}
export default ResMenu;