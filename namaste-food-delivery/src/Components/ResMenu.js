import { useEffect, useState, useContext } from "react";
import { MenuApi } from "../utilities/constants";
import { useParams } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";
import MenuCards from "./MenuCards";
import ResListContext from "../utilities/ResListContext";

const ResMenu = () => {
    const [menuData, setMenuData] = useState(null);
    const [defaultMenuData, setDefaultMenuData] = useState(null);
    const [resDetails, setResDetails] = useState(null);
    const [filterVegItems, setFilterVegItems] = useState(false);
    const [showIndex, setShowIndex] = useState(null);
    const {resMenuContextData, setResMenuDetails} = useContext(ResListContext);
    

    useEffect(()=>{
        fetchMenuItems();
    },[])
    const {resId} = useParams();

    const fetchMenuItems = async()=>{
        var restaurantCards;
        if(!resMenuContextData[resId]){
            const data = await fetch(MenuApi+resId);
            const json = await data.json();
            restaurantCards = json?.data?.cards;
            var dummyObj = {...resMenuContextData};
            dummyObj[resId] = restaurantCards;
            setResMenuDetails(dummyObj);
        }
        else{
            restaurantCards = resMenuContextData[resId];
        }
        const resNeeded = restaurantCards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(resCard => resCard.card.card.title && resCard.card.card.itemCards);
        setMenuData(resNeeded);
        setDefaultMenuData(resNeeded);
        setResDetails(restaurantCards[2]?.card?.card);
    }

    const updateResItems = () => {

        setFilterVegItems(!filterVegItems);
        // If filterVegItems is true => show only veg items
        // else show all the items
        if(filterVegItems){
            setMenuData(defaultMenuData);
        }
        else{
            const vegMenuData = JSON.parse(JSON.stringify(defaultMenuData));
            vegMenuData.forEach(function(data){
                data.card.card.itemCards = data.card.card.itemCards.filter((card)=>card.card.info.isVeg)
            })
            setMenuData(vegMenuData);
        }

    }

    return menuData && resDetails ? <div>
        <div className="ml-[4%] my-2 px-4 py-4 border border-slate-400 w-[90%] rounded-lg">
            <div className="font-bold text-xl">{resDetails.info.name}</div>
            <div>{resDetails.info.avgRating} (Rating) {resDetails.info.costForTwoMessage}</div>
            <div>{resDetails.info.cuisines.join(",")}</div>
            <div>{resDetails.info.locality}</div>
        </div>
        {resDetails.info.veg ? <div className="text-green-500 bg-gray-300 w-48 px-4 py-1 rounded-lg ml-[4%] mt-4">Pure Veg Restaurant</div>
            : 
            <div className="ml-[4%] mt-8 flex cursor-pointer" onClick={updateResItems}>
                {filterVegItems && <div className="w-10 h-4 bg-green-500 mt-2 rounded-l-lg"></div>}
                <div className="h-8 w-8 border border-green-500 rounded-lg">
                    <div className="h-4 w-4 bg-green-500 my-[25%] mx-[25%] rounded-full"></div>
                </div>
                {!filterVegItems && <div className="w-10 h-4 bg-slate-300 mt-2 rounded-r-lg"></div>}
            </div>
        }
        { menuData.map((resCard, index) => <MenuCards resCard = {resCard.card.card} key={resCard.card.card.title} showItems = {index === showIndex} updataShowItems = {()=>setShowIndex(showIndex === index ? null : index)}/>) }
    </div>
     : <ShimmerUi />
}
export default ResMenu;