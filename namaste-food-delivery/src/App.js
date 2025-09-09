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

const AppLayout = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
};

function App() {
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

  return <RouterProvider router={reactRouter} />;
}

export default App;
