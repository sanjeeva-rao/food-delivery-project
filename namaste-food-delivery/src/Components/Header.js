import { cartIcon, logo, profile } from "../utilities/constants";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import ResListContext from "../utilities/ResListContext";

const Header = () => {
    const {cartItems} = useContext(ResListContext);
    const navigate = useNavigate()
    return (
        <div className="flex justify-between p-4 bg-gray-200">
            <div>
                <Link to={"/"}><img className="h-14 lg:h-14 w-14 lg:w-14" alt="logo" src={logo}/></Link>
            </div>
            <div className="bg-orange-500 px-4 rounded-lg h-10 py-2 text-white cursor-pointer ml-[70%] my-2" onClick={()=>navigate("/foodDelivery")}>
                Restaurants
            </div>
            <Link to={"/foodDelivery/cart"}>
                <div className="flex justify-between">
                    {
                        cartItems.length !== 0 && <div className="relative left-7 bottom-4 text-green-600">
                            {cartItems.length}
                        </div>
                    }
                    <img className="h-12 lg:h-12 w-12 lg:w-12" alt="cart" src={cartIcon}/>
                </div>
            </Link>
        </div>
    )
}

export default Header;