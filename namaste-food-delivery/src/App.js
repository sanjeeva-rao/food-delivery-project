import './App.css';
import Header from './Components/Header';
import Body from './Components/Body'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Cart from './Components/Cart';
import Error from "./Components/Error"
import Profile from './Components/Profile';
import ResMenu from './Components/ResMenu';
import Home from './Components/Home';
import GrocMain from './Components/GrocMain';
import ResListContext from './utilities/ResListContext';
import { useState } from 'react';

const AppLayout = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
};

function App() {
  const [resData, setResData] = useState([]);
  const [resMenuDetails, setResMenuDetails] = useState({});
  const reactRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/foodDelivery",
      element: <AppLayout />,
      children: [
        {
          path: "/foodDelivery",
          element: <Body />,
        },
        {
        path: "/foodDelivery/cart",
        element: <Cart />
        },
        {
          path: "/foodDelivery/profile",
          element: <Profile />
        },
        {
          path: "/foodDelivery/resMenu/:resId",
          element: <ResMenu />
        }
      ]
    },
    {
      path: "/grocery",
      element: <GrocMain />
    }
  ]);
  


  return (
    <ResListContext.Provider value={{resList: resData, setResData, resMenuContextData: resMenuDetails, setResMenuDetails}}>
      <RouterProvider router={reactRouter} />
    </ResListContext.Provider>
  );
}

export default App;
