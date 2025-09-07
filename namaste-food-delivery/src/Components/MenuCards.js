import { cloudImgId, collapseIcon, expandIcon } from "../utilities/constants";
import { useState } from "react";

const MenuCards = ({resCard}) => {
    const [showItems,setShowItems] = useState(false);
    return resCard.itemCards.length ? <div className="px-4 shadow-xl py-4 w-[90%] mx-6 lg:mx-12">
        <div className="font-bold text-lg flex cursor-pointer pt-4" onClick={()=>setShowItems(!showItems)}>
            <div className="w-[99%]">{resCard.title + " (" + resCard.itemCards.length + ")"}</div>
            <img className="h-6 w-6" src={showItems ? collapseIcon : expandIcon} alt="expand-collapse"/>
        </div>
        { showItems &&
            resCard.itemCards?.map(card => <div className="py-2" key={card.card.info.id}>
                <div className="flex">
                    <div className="w-[92%]">
                        <div className="flex py-1">
                            {
                                card.card.info.isVeg &&
                                <div className="h-8 w-8 border border-green-500 rounded-lg">
                                    <div className="h-4 w-4 bg-green-500 my-[25%] mx-[25%] rounded-full"></div>
                                </div>
                            }
                            <div className="font-semibold pt-1 pl-2">{card.card.info.name}</div>
                        </div>
                        <div>₹ {card.card.info.price/100}</div>
                        <div>{card.card.info.description}</div>
                        <div>{card.card.info.ratings.aggregatedRating.rating} Rating</div>
                    </div>
                    <div className="">
                        {card.card.info.imageId && <img className="h-32 w-32" alt="img" src={cloudImgId + card.card.info.imageId} />}
                        <div className="px-1 py-2 text-center bg-slate-300 text-green-700 rounded-lg my-1 w-32">Add</div>
                    </div>
                </div>
                <br></br>
                <hr className="border-gray-500"/>
            </div>)
        }
    </div> : <div></div>
}
export default MenuCards;