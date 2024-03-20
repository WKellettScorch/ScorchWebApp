import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import PropTypes from 'prop-types';
import './SideNavBar.css';

const SideNavBar = ({ isNavVisible, toggleNavVisibility }) => {
    const [selectedNavItem, setSelectedNavItem] = useState('Home');
    const navigate = useNavigate(); // Initialize the navigate function

    const handleNavItemClick = (item, route) => {
        setSelectedNavItem(item);
        toggleNavVisibility(); 

        // If the clicked item is 'Log Out', clear the token and navigate to login page
        if (item === 'Log Out') {
            localStorage.removeItem('token'); // Clear the JWT token
            navigate('/'); // Navigate to the login screen
        }
    };

    const navItems = [
        { label: 'Home', route: '/home' },
        { label: 'Customers', route: '/customers' },
        { label: 'Jobs', route: '/jobs' },
        { label: 'Google Reviews', route: '/GoogleReviewsView' },
        { label: 'Image Uploader', route: '/ImageUploaderView' },
        { label: 'Settings', route: '/SettingsView' },
        // Removed the Log Out route as it will be handled differently
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
            {navItems.map((item, index) => (
                <Link
                    key={index}
                    to={item.route}
                    className={`navItem ${selectedNavItem === item.label ? 'selected' : ''}`}
                    onClick={() => handleNavItemClick(item.label, item.route)} // Pass the route as a parameter
                >
                    {item.label}
                </Link>
            ))}
            <div // Use a div or button for Log Out to handle click separately
                className={`navItem ${selectedNavItem === 'Log Out' ? 'selected' : ''}`}
                onClick={() => handleNavItemClick('Log Out')} // No route needed for Log Out
            >
                Log Out
            </div>
        </div>
    );
};

SideNavBar.propTypes = {
    isNavVisible: PropTypes.bool.isRequired,
    toggleNavVisibility: PropTypes.func.isRequired,
};

export default SideNavBar;
