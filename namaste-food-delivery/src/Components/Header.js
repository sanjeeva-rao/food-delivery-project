import { cartIcon, logo, profile } from "../utilities/constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ResListContext from "../utilities/ResListContext";

const Header = () => {
    const {cartItems} = useContext(ResListContext);
    return (
        <div className="flex justify-between p-4 bg-gray-200">
            <div>
                <Link to={"/"}><img className="h-14 lg:h-14 w-14 lg:w-14" alt="logo" src={logo}/></Link>
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