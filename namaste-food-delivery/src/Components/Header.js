import { cartIcon, logo } from "../utilities/constants";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import ResListContext from "../utilities/ResListContext";

const Header = () => {
  const { cartItems } = useContext(ResListContext);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-4 bg-gray-200">
      {/* Logo */}
      <div>
        <Link to={"/"}>
          <img
            className="h-12 w-12 lg:h-14 lg:w-14"
            alt="logo"
            src={logo}
          />
        </Link>
      </div>

      {/* Middle Nav */}
      <div
        className="bg-orange-500 px-3 lg:px-4 rounded-lg h-9 lg:h-10 flex items-center text-sm lg:text-base text-white cursor-pointer mx-4 lg:mx-0"
        onClick={() => navigate("/foodDelivery")}
      >
        Restaurants
      </div>

      {/* Cart */}
      <Link to={"/foodDelivery/cart"}>
        <div className="flex items-center relative">
          {cartItems.length !== 0 && (
            <div className="absolute -top-1 -right-1 text-green-600 font-bold text-sm">
              {cartItems.length}
            </div>
          )}
          <img
            className="h-10 w-10 lg:h-12 lg:w-12"
            alt="cart"
            src={cartIcon}
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
