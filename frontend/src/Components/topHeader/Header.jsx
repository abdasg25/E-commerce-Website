import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"



const Header = () => {

  return (
    <div className="header">
      <span className="font-bold">Summer Sale!Get up to 50% off  on all swimsuits. <span className='shopNow'><Link to='/home'>Shop Now!</Link></span></span>
    </div>
  );
};

export default Header;