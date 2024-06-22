import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Home from './Pages/Home/Home.jsx';
import SignUp from './Pages/SignUp/signup.jsx';
import SignIn from './Pages/SignIn/signin.jsx';
import Account from './Pages/Account/account.jsx';
import AddressBook from './Pages/Address Book/AddressBook.jsx';
import ProductDetail from './Pages/Product Detail/ProductDetail.jsx';
import ShoppingCartPage from './Pages/Shopping Cart/ShoppingCart.jsx';
import Example from './Pages/Product Detail/ProductOverview.jsx';
import Checkout from './Pages/Checkout/checkout.jsx';
import Dashboard from './Dasboard/Dashboard.jsx';
import ProfileDropdown from './Components/ProfileDropdown/profileDropdown.jsx';
import Product from "./Components/product/product.jsx";
import ContactUs from "./Pages/ContactUs/contact.jsx";
import AboutUs from './Pages/AboutUs/about.jsx';
import WishlistPage from './Pages/WishlistPage/WishlistPage.jsx';
import UploadProductPage from './Pages/Admin/UploadProduct/uploadProductPage.jsx';
import Verification from './Pages/Verification/verification.jsx';
import NotFoundPage from './Pages/notFound/notFoundPage.jsx';
import AdminSideBar from './Components/SidebarAdmin/sidebar.jsx';
import AdminDashboardOrders from './Components/Admin/AdminDashboardOrders.jsx';
const router = createBrowserRouter(
  [
    
    {
      path: '/home',
      element: <Home/>
    },
    {
      path: '/signup',
      element: <SignUp/>
    },
    {
      path: '/signin',
      element: <SignIn/>
    },
    {
      path: '/account',
      element: <Account/>
    },
    {
      path: '/addressbook',
      element: <AddressBook/>
    },
    {
      path: '/productdetail',
      element: <ProductDetail/>
    },
    {
      path: '/cart',
      element: <ShoppingCartPage/>
    },
    {
      path: '/example',
      element: <Example/>
    },
    {
      path:'/checkout',
      element: <Checkout/>
    },
    {
      path:'/dashboard',
      element: <Dashboard/>
    },
    {
      path:'/profile',
      element: <ProfileDropdown/>
    },
    {
      path:'/product',
      element: <Product/>
    },
    {
      path:'/productdetail/:productId',
      element: <Product/>
    },
    {
      path:'/contactus',
      element: <ContactUs/>
    },
    {
      path:'/aboutus',
      element: <AboutUs/>
    },
    {
      path:'/wishlist',
      element: <WishlistPage/>
    },
    {
      path:'/uploadproduct',
      element:<UploadProductPage/>
    },
    {
      path:'/ecommerence/verifyUser/:token' ,
      element:<Verification/>
    },
    {
      path:"*",
      element:<NotFoundPage/>
    },
    {
      path: '/sidebar',
      element: <AdminSideBar/>
    },
    {
      path:'/admin-orders',
      element:<AdminDashboardOrders/>
    }
  ]
);
function App() {
  return (
    <div classname="app">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;