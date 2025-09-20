import { lazy, Suspense } from "react";
import FoodHome from "./FoodHome";

const Home = () => {
    const GroceriesHome = lazy(()=>import("./GrocerriesHome"))
    return <div className="bg-orange-400">
        <div className="py-10">
            <div className="text-white text-center font-bold text-2xl">Order Food & Groceries. Discover best Restaurants</div>
            <div className="flex mx-4 lg:mx-[25%] py-16">
                <FoodHome />
                <Suspense>
                    <GroceriesHome />
                </Suspense>
            </div>
        </div>
    </div>
}

export default Home;