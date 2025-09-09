import { useNavigate } from "react-router-dom";

const GroceriesHome = () => {
    const navigate = useNavigate();
    return <div className="h-[250px] w-[250px] lg:h-[350px] lg:w-[350px] bg-white mr-10 rounded-lg cursor-pointer" onClick={()=>{navigate("/grocery")}}>
        <div className="text-center py-2">
            <div className="font-bold text-xl lg:text-2xl">Insta Mart</div>
            <div className="font-bold text-xl lg:text-2xl">Instant Grocery</div>
            <img alt="logo" src="https://tse2.mm.bing.net/th/id/OIP.1h1hiRSUtDsGd2wow6BMjgHaE7?pid=Api&P=0&h=180" className="h-28 w-28 lg:h-40 lg:w-40 mx-[25%] my-4 lg:my-8"/>
            <div>➡️</div>
        </div>
    </div>
}
export default GroceriesHome;