import React from 'react';
import Logo from '../../Logo/Logo';
import BackButton from './BackButton/BackButton.js';
import ScorchLogo from '../../../assets/images/Scorch_200x100.png';
import { FaBars } from 'react-icons/fa';
import './TopNavBar.css';

const TopNavBar = ({ toggleNavVisibility }) => {
    return (
        <div className="topNavBar">
            <div className="leftSection">
                <div className="hamburgerMenu" onClick={toggleNavVisibility}>
                    <FaBars size={20} />
                </div>
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
