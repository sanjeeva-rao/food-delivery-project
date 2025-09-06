import './App.css';
import Header from './Components/Header';
import Body from './Components/Body'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Cart from './Components/Cart';
import Error from "./Components/Error"
import Profile from './Components/Profile';

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
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
        path: "/cart",
        element: <Cart />
        },
        {
          path: "/profile",
          element: <Profile />
        }
      ]
    }
  ]);

  return <RouterProvider router={reactRouter} />;
}

export default App;
