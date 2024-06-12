import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBoxOpen, faTimesCircle, faStar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './profileDropdown.css';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-dropdown">
      <button className="profile-icon" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faUser} />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li><a href="#account"><FontAwesomeIcon icon={faUser} /> Manage My Account</a></li>
            <li><a href="#order"><FontAwesomeIcon icon={faBoxOpen} /> My Order</a></li>
            <li><a href="#cancellations"><FontAwesomeIcon icon={faTimesCircle} /> My Cancellations</a></li>
            <li><a href="#reviews"><FontAwesomeIcon icon={faStar} /> My Reviews</a></li>
            <li><a href="#logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
