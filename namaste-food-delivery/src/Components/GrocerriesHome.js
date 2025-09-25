import { useNavigate } from "react-router-dom";

const GroceriesHome = () => {
    const navigate = useNavigate();
    return <div className=" bg-white rounded-lg cursor-pointer" onClick={()=>navigate("/grocery")}>
        <div className="text-center py-2">
            <div className="font-bold text-sm lg:text-2xl">Insta Mart From Instant Grocery</div>
            <img alt="logo" src="https://tse2.mm.bing.net/th/id/OIP.1h1hiRSUtDsGd2wow6BMjgHaE7?pid=Api&P=0&h=180" className="h-20 w-20 lg:h-40 lg:w-40 mx-auto my-2 lg:my-4"/>
            <div>➡️</div>
        </div>
    </div>
}
export default GroceriesHome;