// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faBoxOpen, faTimesCircle, faStar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import './profileDropdown.css';

// const ProfileDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="profile-dropdown">
//       <button className="profile-icon" onClick={toggleDropdown}>
//         <FontAwesomeIcon icon={faUser} />
//       </button>
//       {isOpen && (
//         <div className="dropdown-menu">
//           <ul>
//             <li><a href="#account"><FontAwesomeIcon icon={faUser} /> Manage My Account</a></li>
//             <li><a href="#order"><FontAwesomeIcon icon={faBoxOpen} /> My Order</a></li>
//             <li><a href="#cancellations"><FontAwesomeIcon icon={faTimesCircle} /> My Cancellations</a></li>
//             <li><a href="#reviews"><FontAwesomeIcon icon={faStar} /> My Reviews</a></li>
//             <li><a href="#logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a></li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileDropdown;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBoxOpen, faTimesCircle, faStar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button className="flex items-center focus:outline-none" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faUser} className="text-xl text-gray-700" />
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <a href="#account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <FontAwesomeIcon icon={faUser} className="mr-2" /> Manage My Account
            </a>
            <a href="#order" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <FontAwesomeIcon icon={faBoxOpen} className="mr-2" /> My Order
            </a>
            <a href="#cancellations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <FontAwesomeIcon icon={faTimesCircle} className="mr-2" /> My Cancellations
            </a>
            <a href="#reviews" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <FontAwesomeIcon icon={faStar} className="mr-2" /> My Reviews
            </a>
            <a href="#logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" /> Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
