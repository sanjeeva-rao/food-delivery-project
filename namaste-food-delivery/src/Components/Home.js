import FoodHome from "./FoodHome";
import GroceriesHome from "./GrocerriesHome";

const Home = () => {
    return <div className="bg-orange-400 h-full">
        <div className="py-10">
            <div className="text-white text-center font-bold text-2xl">Order Food & Groceries. Discover best Restaurants</div>
            <div className="flex mx-4 lg:mx-[25%] py-16">
                <FoodHome />
                <GroceriesHome />
            </div>
        </div>
    </div>
}

export default Home;