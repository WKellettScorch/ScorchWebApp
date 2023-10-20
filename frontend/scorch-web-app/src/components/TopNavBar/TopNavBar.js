import React from 'react';
import Logo from '../Logo/Logo';
import BackButton from '../BackButton/BackButton';
import ScorchLogo from '../../assets/images/Scorch_200x100.png';
import './TopNavBar.css';

const TopNavBar = () => {
    return (
        <div className="topNavBar">
            <div className="leftSection">
                <img src={ScorchLogo} alt="Scorch Logo"></img>
            </div>
            <div className="centerSection">
                <Logo />
            </div>
            <div className="rightSection">
                <BackButton />
            </div>
        </div>
    );
};


export default TopNavBar;
