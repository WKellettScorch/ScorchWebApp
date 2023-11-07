import React, { useState } from 'react';
import './EditCustomerForm.css';
import { editCustomer } from '../../../api/CustomerAPI';

const EditCustomerForm = ({ onClose, customer }) => {
    //const [formData, setFormData] = useState(customer);
    const [formData, setFormData] = useState(customer);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        formData.CustomerID = customer.CustomerID
    
        // Here, you'll make the API call to update the customer data instead of adding a new one.
        editCustomer(formData)
        .then(response => {
            alert(response.message);  // Show success message
            onClose();
        })
        .catch(error => {
            alert('Failed to edit customer. Please try again.');
        });
    };
    
    return (
        <div className="edit-customer-form-overlay">
            <form onSubmit={handleSubmit} className="add-customer-form">
                <input
                    type="text"
                    name="FirstName"
                    placeholder="First Name"
                    value={formData.FirstName}
                    onChange={handleInputChange}
                    required
                    pattern="[a-zA-Z\s]+"
                    title="Only alphabetic characters are allowed"
                />
                <input
                    type="text"
                    name="LastName"
                    placeholder="Last Name"
                    value={formData.LastName}
                    onChange={handleInputChange}
                    required
                    pattern="[a-zA-Z\s]+"
                    title="Only alphabetic characters are allowed"
                />
                <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    value={formData.Email}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="Phone"
                    placeholder="Phone Number"
                    value={formData.Phone}
                    onChange={handleInputChange}
                    required
                    pattern="[\(]?(\d{3})[\)]?[\s-]?(\d{3})[\s-]?(\d{4})"
                    title="Please enter a valid phone number"
                />
                <input
                    type="text"
                    name="StreetAddress"
                    placeholder="Street Address"
                    value={formData.StreetAddress}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="City"
                    placeholder="City"
                    value={formData.City}
                    onChange={handleInputChange}
                    required
                    pattern="[a-zA-Z\s]+"
                    title="Only alphabetic characters are allowed"
                />
                <input
                    type="text"
                    name="State"
                    placeholder="State"
                    value={formData.State}
                    onChange={handleInputChange}
                    required
                    pattern="[a-zA-Z\s]+"
                    title="Only alphabetic characters are allowed"
                />
                <input
                    type="text"
                    name="ZipCode"
                    placeholder="Zip Code"
                    value={formData.ZipCode}
                    onChange={handleInputChange}
                    required
                    pattern="^\d{5}(?:[-\s]\d{4})?$"
                    title="Valid formats: 12345 or 12345-6789"
                />
                <button type="submit">Submit</button>
                <button onClick={onClose}>Close</button>
            </form>
        </div>
    );
};

export default EditCustomerForm;
