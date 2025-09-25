import { cloudImgId } from "../utilities/constants";
import { useNavigate } from "react-router-dom";

export const ResCard = ({ resInfo }) => {
  const navigate = useNavigate();

  // consider only first 3 cuisines
  const cuisines = resInfo?.cuisines?.slice(0, 3) || [];

  return (
    <div
      className="w-[160px] sm:w-[200px] lg:w-[250px] h-auto mx-2 my-4 cursor-pointer hover:bg-gray-200 rounded-lg shadow-sm transition"
      onClick={() => navigate("/foodDelivery/resMenu/" + resInfo.id)}
    >
      <img
        alt="res-image"
        src={cloudImgId + resInfo.cloudinaryImageId}
        className="h-[140px] sm:h-[180px] lg:h-[230px] w-full object-cover rounded-t-lg"
      />
      <div className="px-2 py-2">
        <div className="font-bold text-sm sm:text-base">{resInfo.name}</div>
        <div className="text-xs sm:text-sm">{resInfo.avgRating} ⭐ Rating</div>
        <div className="text-xs sm:text-sm truncate">{cuisines.join(", ")}</div>
        <div className="text-xs sm:text-sm text-gray-600">{resInfo.locality}</div>
      </div>
    </div>
  );
};
