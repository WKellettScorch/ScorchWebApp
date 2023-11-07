import React, { useState } from 'react';
import SideNavBar from '../Navbars/SideNavBar/SideNavBar';
import TopNavBar from '../Navbars/TopNavBar/TopNavBar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
    // State to manage the visibility of the side navigation bar
    const [isNavVisible, setIsNavVisible] = useState(false);

    // Function to toggle the visibility
    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
        console.log("MainLayout.js: " + isNavVisible);
    };    

    return (
        <div className="mainLayout">
            <TopNavBar toggleNavVisibility={toggleNavVisibility} />
            <div className="bodyWrapper">
                <div className={`sideBar ${isNavVisible ? 'sideBarOpen' : ''}`}> 
                    <SideNavBar isNavVisible={isNavVisible} toggleNavVisibility={toggleNavVisibility} />
                </div>
                <div className="contentArea">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
