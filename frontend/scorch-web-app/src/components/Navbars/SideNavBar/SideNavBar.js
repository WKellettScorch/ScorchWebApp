import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import PropTypes from 'prop-types';
import './SideNavBar.css';

const SideNavBar = ({ isNavVisible, toggleNavVisibility }) => {
    const navigate = useNavigate(); // Use navigate for redirection
    const location = useLocation(); // Use location to determine the current route

    // Determines the label of the selected nav item based on the current path
    const getSelectedNavItem = () => {
        const routePath = location.pathname;
        switch (routePath) {
            case '/home':
                return 'Home';
            case '/customers':
                return 'Customers';
            case '/jobs':
                return 'Jobs';
            // Add more cases as needed
            default:
                return 'Home'; // Default selection
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear the JWT token
        toggleNavVisibility(); // Optionally close the sidebar
        navigate('/'); // Navigate to the login screen
    };

    const navItems = [
        { label: 'Home', route: '/home' },
        { label: 'Customers', route: '/customers' },
        { label: 'Jobs', route: '/jobs' },
        { label: 'Google Reviews', route: '/GoogleReviewsView' },
        { label: 'Image Uploader', route: '/ImageUploaderView' },
        { label: 'Settings', route: '/SettingsView' },
    ];

    useEffect(() => {
        // Add event listener to close the nav on outside click
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
                    className={`navItem ${getSelectedNavItem() === item.label ? 'selected' : ''}`}
                    onClick={toggleNavVisibility} // Close nav on item click
                >
                    {item.label}
                </Link>
            ))}
            <div 
                className={`navItem ${getSelectedNavItem() === 'Log Out' ? 'selected' : ''}`}
                onClick={handleLogout} // Handle logout click separately
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
