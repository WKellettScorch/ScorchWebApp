import React from 'react';
import './AddCustomerButton.css';

// In AddCustomerButton.js
const AddCustomerButton = ({ onClick }) => {
    return (
        <button className="add-customer-btn" onClick={() => {
            if (onClick) {
                onClick();
            }
        }}>Add Customer</button>
    );
}




export default AddCustomerButton;
