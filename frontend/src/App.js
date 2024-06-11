import './App.css';
import { BrowserRouter, Routes, Route,createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Home from './Pages/Home/Home.jsx';
import SignUp from './Pages/SignUp/signup.jsx';
import SignIn from './Pages/SignIn/signin.jsx';
import Account from './Pages/Account/account.jsx';
import AddressBook from './Pages/Address Book/AddressBook.jsx';
import ProductDetail from './Pages/Product Detail/ProductDetail.jsx';
import ShoppingCartPage from './Pages/Shopping Cart/ShoppingCart.jsx';
import Example from './Pages/Product Detail/ProductOverview.jsx';

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
