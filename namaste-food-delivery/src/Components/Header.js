import { cartIcon, logo, profile } from "../utilities/constants";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex space-x-[300px] lg:space-x-[900px] p-4 bg-gray-200">
            <div>
                <Link to={"/"}><img className="h-14 lg:h-28 w-14 lg:w-28" alt="logo" src={logo}/></Link>
            </div>
            <div className="flex space-x-16 lg:space-x-24 py-1 lg:py-4">
                <div>
                    <Link to={"/cart"}><img className="h-12 lg:h-16 w-12 lg:w-16" alt="cart" src={cartIcon}/></Link>
                </div>
                <div>
                    <Link to={"/profile"}><img className="h-12 lg:h-16 w-12 lg:w-16" alt="cart" src={profile}/></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;