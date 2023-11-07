import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes
import './SideNavBar.css';

const SideNavBar = ({ isNavVisible, toggleNavVisibility }) => {
    const [selectedNavItem, setSelectedNavItem] = useState('Home');

    const handleNavItemClick = (item) => {
        setSelectedNavItem(item);
        // Close the side nav bar when an item is clicked
        toggleNavVisibility();
    };

    const navItems = [
        { label: 'Home', route: '/home' },
        { label: 'Customers', route: '/customers' },
        { label: 'Jobs', route: '/jobs' },
        { label: 'Google Reviews', route: '/GoogleReviewsView' },
        { label: 'Image Uploader', route: '/ImageUploaderView' },
        { label: 'Settings', route: '/SettingsView' },
        { label: 'Log Out', route: '/LogOutView' },
        // Add other items as needed
    ];

    // Use an effect to add an event listener to the document
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isNavVisible && !event.target.closest('.sideNavBar')) {
                toggleNavVisibility();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isNavVisible, toggleNavVisibility]);

    return (
        <div className={`sideNavBar ${isNavVisible ? 'sideBarOpen' : ''}`}>
            {console.log("sideNavBar.js : " & isNavVisible)}
            {navItems.map((item, index) => (
                <Link
                    key={index}
                    to={item.route}
                    className={`navItem ${selectedNavItem === item.label ? 'selected' : ''}`}
                    onClick={() => handleNavItemClick(item.label)}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    );
};

// Add prop types validation
SideNavBar.propTypes = {
    isNavVisible: PropTypes.bool.isRequired,
    toggleNavVisibility: PropTypes.func.isRequired
};

export default SideNavBar;
