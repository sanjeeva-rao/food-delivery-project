import { useNavigate } from "react-router-dom";
const FoodHome = () => {
    const navigate = useNavigate();
    return <div className="h-[250px] w-[250px] lg:h-[350px] lg:w-[350px] bg-white mr-4 ml-6 lg:ml-0 lg:mr-10 rounded-lg cursor-pointer" onClick={()=>navigate("/foodDelivery")}>
        <div className="text-center py-2">
            <div className="font-bold text-xl lg:text-2xl">Food Delivery</div>
            <div className="font-bold text-xl lg:text-2xl">From Restaurants</div>
            <img alt="logo" src="https://tse2.mm.bing.net/th/id/OIP.bso0W6RUjvIhDlp5Y4TkxAHaE8?pid=Api&P=0&h=180" className="h-28 w-28 lg:h-40 lg:w-40 mx-[25%] lg:mx-[20%] my-4 lg:my-8"/>
            <div>➡️</div>
        </div>
    </div>
}
export default FoodHome;