import { useNavigate } from "react-router-dom";
const FoodHome = () => {
    const navigate = useNavigate();
    return <div className=" bg-white mr-4 lg:mr-10 rounded-lg cursor-pointer" onClick={()=>navigate("/foodDelivery")}>
        <div className="text-center py-2">
            <div className="font-bold text-sm lg:text-2xl">Food Delivery From Restaurants</div>
            <img alt="logo" src="https://tse2.mm.bing.net/th/id/OIP.bso0W6RUjvIhDlp5Y4TkxAHaE8?pid=Api&P=0&h=180" className="h-20 w-20 lg:h-40 lg:w-40 mx-auto my-2 lg:my-4"/>
            <div>➡️</div>
        </div>
    </div>
}
export default FoodHome;