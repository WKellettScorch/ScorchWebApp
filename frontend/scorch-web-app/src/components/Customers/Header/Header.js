import React from 'react';
import './Header.css';

// In Header.js
const Header = ({ children }) => {
    return (
        <div className="header-container">
            <h1>Customers</h1>
            {children}
        </div>
    );
}


export default Header;
 