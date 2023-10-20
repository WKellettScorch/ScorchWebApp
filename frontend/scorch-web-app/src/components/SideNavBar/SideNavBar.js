import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNavBar.css';

const SideNavBar = () => {
    const [selectedNavItem, setSelectedNavItem] = useState('Home');


    const handleNavItemClick = (item) => {
        setSelectedNavItem(item);
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

    return (
        <div className="sideNavBar">
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

export default SideNavBar;
