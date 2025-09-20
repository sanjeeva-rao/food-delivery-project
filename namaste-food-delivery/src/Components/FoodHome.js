import { useNavigate } from "react-router-dom";
const FoodHome = () => {
    const navigate = useNavigate();
    return <div className="h-[250px] w-[250px] lg:h-[350px] lg:w-[350px] bg-white mr-4 lg:mr-10 rounded-lg cursor-pointer" onClick={()=>navigate("/foodDelivery")}>
        <div className="text-center py-2">
            <div className="font-bold text-sm lg:text-2xl">Food Delivery From Restaurants</div>
            <img alt="logo" src="https://tse2.mm.bing.net/th/id/OIP.bso0W6RUjvIhDlp5Y4TkxAHaE8?pid=Api&P=0&h=180" className="h-20 w-20 lg:h-40 lg:w-40 mx-[20%] lg:mx-[20%] my-4 lg:my-8"/>
            <div>➡️</div>
        </div>
    </div>
}
export default FoodHome;