import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from './Pages/Home/Home.jsx';
import SignUp from './Pages/SignUp/signup.jsx';
import SignIn from './Pages/SignIn/signin.jsx';
import Account from './Pages/Account/account.jsx';
import AddressBook from './Pages/Address Book/AddressBook.jsx';
import ProductDetail from './Pages/Product Detail/ProductDetail.jsx';
function App() {
  return (
    <div classname="app">
      <BrowserRouter>
      <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/account' element={<Account/>}></Route>
      <Route path='/addressbook' element={<AddressBook/>}></Route>
      <Route path='/productdetail' element={<ProductDetail/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
