import React from 'react';
import './Sidebar.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item">
          Woman's Fashion
          <ArrowForwardIosIcon className="menu-icon" />
        </li>
        <li className="menu-item">
          Men's Fashion
          <ArrowForwardIosIcon className="menu-icon" />
        </li>
        <li className="menu-item">Electronics</li>
        <li className="menu-item">Home & Lifestyle</li>
        <li className="menu-item">Medicine</li>
        <li className="menu-item">Sports & Outdoor</li>
        <li className="menu-item">Baby's & Toys</li>
        <li className="menu-item">Groceries & Pets</li>
        <li className="menu-item">Health & Beauty</li>
      </ul>
    </div>
  );
};

export default Sidebar;