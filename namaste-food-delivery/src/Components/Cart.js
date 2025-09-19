import { useContext } from "react";
import ResListContext from "../utilities/ResListContext";

const Cart = () => {
    const {cartItems,setCartItems,resMenuDetails,setResMenuDetails} = useContext(ResListContext);
    var totalPrice = 0;
    cartItems.forEach((item)=>{
        totalPrice += item.price ? item.price/100 : item.defaultPrice/100
    })

    const clearCart = () => {
        setCartItems([]);
    }

    return !cartItems.length ? <div className="text-center my-24">
        <div className="text-3xl font-bold py-8">Your Cart is empty</div>
        <div className="text-xl">You can go to home page to view more restaurants</div>
    </div>
    : <div>
        {
            cartItems.map(item => <div key={item.id} className="flex justify-between w-6/12 mx-auto my-4">
                <div>{item.name}</div>
                <div>Rs. {item.price ? item.price/100 : item.defaultPrice/100}</div>
            </div>)
        }
        <div className="flex justify-between w-6/12 mx-auto my-4">
            <div>Total Amount</div>
            <div>Rs {totalPrice}</div>
        </div>
        <div className="bg-orange-500 w-[90px] px-2 py-1 rounded-sm mx-[50%] my-10 cursor-pointer" onClick={clearCart}>
            Clear Cart
        </div>
    </div>
}

export default Cart;