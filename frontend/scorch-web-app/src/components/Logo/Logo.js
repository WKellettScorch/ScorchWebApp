import React from 'react';
import './Logo.css';
import logo from '../../assets/images/Example_Client_Logo_200x100.png';

const Logo = () => {
    return (
        <div className="logoContainer">
            <img src={logo} alt="Client's Logo" className="logoImage" />
        </div>
    );
};

export default Logo;
