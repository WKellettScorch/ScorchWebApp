import React from 'react';
import './BackButton.css';

const BackButton = () => {
    return (
        <button className="backButton" onClick={() => window.location.href = 'https://scorchseo.com'}>
            Back To Site
        </button>
    );
};

export default BackButton;
