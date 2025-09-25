import { useEffect, useState, useContext } from "react";
import { ResCard } from "./ResCard";
import ShimmerUi from "./ShimmerUi";
import useGetOnlineStatus from "../utilities/useGetOnlineStatus";
import ResListContext from "../utilities/ResListContext";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [defaultResData, setDefaultResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { resList, setResData } = useContext(ResListContext);

  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  const fetchRestaurantsData = async () => {
    if (resList.length === 0) {
      const data = await fetch(
        "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.053222001893733&lng=77.03620623797178&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const resListData =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants ||
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (resListData) {
        setRestaurantData(resListData);
        setDefaultResData(resListData);
        setResData(resListData);
      }
    } else {
      setRestaurantData(resList);
      setDefaultResData(resList);
    }
  };

  const filterSearchRestaurants = (val) => {
    setSearchText(val);
    const filteredRes = defaultResData.filter((res) =>
      res.info.name.toUpperCase().includes(val.toUpperCase())
    );
    setRestaurantData(filteredRes);
  };

  const onlineStatus = useGetOnlineStatus();

  if (!onlineStatus) {
    return (
      <div className="text-center mt-10 font-semibold">
        Looks like you're offline. Please, check your internet connection.
      </div>
    );
  }

  return (
    <div className="px-2 lg:px-8">
      {/* Search Bar */}
      <div className="flex justify-center py-4">
        <input
          type="text"
          placeholder="Search Restaurants"
          className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 border border-black rounded-md"
          value={searchText}
          onChange={(e) => filterSearchRestaurants(e.target.value)}
        />
      </div>

      {/* Restaurant Cards */}
      {restaurantData.length === 0 ? (
        <ShimmerUi />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
          {restaurantData.map((res) => (
            <ResCard resInfo={res.info} key={res.info.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
