import {React,useState} from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search results page with query
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="brand">Exclusive</span>

      </div>
      <div className="navbar-center">
        <button className="nav-button" onClick={() => handleNavigation('/home')}>Home</button>
        <button className="nav-button">Contact</button>
        <button className="nav-button">About</button>
        <button className="nav-button" onClick={() => handleNavigation('/signup')}>Sign Up</button>
      </div>
      <div className="navbar-right">
        <div className="search-container">

          <input type="text" className="search-bar" placeholder="What are you looking for?" />
          <SearchIcon className="search-icon" />
        </div>
        <button className="icon-button"><FavoriteBorderIcon /></button>
        <button className="icon-button"><ShoppingCartIcon /></button>
      </div>
    </nav>
  );
};

export default NavBar;
