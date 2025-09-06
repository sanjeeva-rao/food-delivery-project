import { cloudImgId, collapseIcon, expandIcon } from "../utilities/constants";
import { useState } from "react";

const MenuCards = ({resCard}) => {
    const [showItems,setShowItems] = useState(false);
    return <div className="px-4 shadow-xl py-4 w-[90%] mx-12">
        <div className="font-bold text-lg flex cursor-pointer" onClick={()=>setShowItems(!showItems)}>
            <div className="w-[99%]">{resCard.title}</div>
            <img className="h-6 w-6" src={showItems ? collapseIcon : expandIcon} alt="expand-collapse"/>
        </div>
        { showItems &&
            resCard.itemCards?.map(card => <div className="py-2">
                <div className="flex">
                    <div className="w-[92%]">
                        <div className="font-semibold">{card.card.info.name}</div>
                        <div>₹ {card.card.info.price/100}</div>
                        <div>{card.card.info.description}</div>
                        <div>{card.card.info.ratings.aggregatedRating.rating} Rating</div>
                    </div>
                    <div className="">
                        <img className="h-32 w-32" alt="img" src={cloudImgId + card.card.info.imageId} />
                        <div className="px-1 py-2 text-center bg-slate-300 text-green-700 rounded-lg my-1">Add</div>
                    </div>
                </div>
                <br></br>
                <hr className="border-gray-500"/>
            </div>)
        }
    </div>
}
export default MenuCards;