import { cloudImgId } from "../utilities/constants";
import { useNavigate } from "react-router-dom";

export const ResCard = ({resInfo}) => {
    const navigate = useNavigate();

    // coniser only fisrt 3 cuisins of the restaurant
    resInfo ?.cuisines ?.splice(3)
    return <div className="h-[350px] w-[250px] mx-1 lg:mx-8 my-4 hover:bg-gray-200; cursor-pointer hover:bg-gray-200" onClick={()=>navigate("/foodDelivery/resMenu/"+resInfo.id)}>
        <img alt="res-image" src={cloudImgId + resInfo.cloudinaryImageId} className="h-[230px] w-[250px]" />
        <div className="px-2 py-2"> 
            <div className="font-bold">{resInfo.name}</div>
            <div >{resInfo.avgRating} Rating</div>
            <div>{resInfo.cuisines.join(",")}</div>
            <div>{resInfo.locality}</div>
        </div>
    </div>
}