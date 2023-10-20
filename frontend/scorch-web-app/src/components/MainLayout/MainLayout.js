import React from 'react';
import SideNavBar from '../SideNavBar/SideNavBar';
import TopNavBar from '../TopNavBar/TopNavBar';
import './MainLayout.css';

const MainLayout = ({ children }) => {
    return (
        <div className="mainLayout">
            <TopNavBar />
            <div className="bodyWrapper">
                <div className="sideBar">
                    <SideNavBar />
                </div>
                <div className="contentArea">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
