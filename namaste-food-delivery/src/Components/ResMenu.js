import { useEffect, useState } from "react";
import { MenuApi } from "../utilities/constants";
import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import MenuCards from "./MenuCards";
const ResMenu = () => {
    const [menuData, setMenuData] = useState(null);
    useEffect(()=>{
        fetchMenuItems();
    },[])
    const {resId} = useParams();
    const fetchMenuItems = async()=>{
        const data = await fetch(MenuApi+resId);
        const json = await data.json();
        var resNeeded = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(resCard => resCard.card.card.title && resCard.card.card.itemCards);
        setMenuData(resNeeded);
    }
    return menuData ? menuData.map(resCard => <MenuCards resCard = {resCard.card.card} key={resCard.card.card.title}/>) 
     : <ShimmerUi />
}
export default ResMenu;