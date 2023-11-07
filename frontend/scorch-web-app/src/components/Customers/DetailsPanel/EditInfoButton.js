import React from 'react';
import './EditInfoButton.css';

const EditInfoButton = ({ customerId, onEdit }) => {
    return (
        <button 
            className="edit-info-button" 
            onClick={(e) => {
                e.stopPropagation(); 
                onEdit();
            }}
        >
            Edit Customer Info
        </button>
    );
}

export default EditInfoButton;
