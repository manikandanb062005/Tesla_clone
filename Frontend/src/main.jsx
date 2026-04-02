import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from '../src/pages/Home.jsx'
import ShopPage from '../src/pages/StorePage.jsx'
import About from '../src/pages/About.jsx'
import ProductDetails from "../src/pages/ProductDetails.jsx";
import BuyPage from '../src/pages/BuyPage.jsx'
import OrderConfirm from '../src/pages/OrderConfirm.jsx'
import Models from '../src/pages/Models.jsx'
import ModelDetails from "../src/pages/ModelDetails.jsx";
import CarBooking from "../src/pages/CarBooking.jsx";
import BookingConfirm from "../src/pages/BookingConfirm.jsx";


const router=createBrowserRouter([
{
  path :'/',
  element : <Home/>
},
{
  path :'/shop',
  element :<ShopPage/>
},
{
  path : '/About',
  element :<About/>
},
{
  path :"/product/:id",
  element :<ProductDetails/>
},
 {
    path: "/buy/:id",
    element: <BuyPage />,
  },
  {
  path: "/orderconfirm",
  element: <OrderConfirm/>,
  },
  { path: "/models",
    element: <Models /> 
  },
  { path: "/models/:id", 
    element: <ModelDetails /> 
  },
  { path: "/book/:id", 
    element: <CarBooking /> 
  },
  { path: "/booking-confirm", 
    element: <BookingConfirm /> 
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
