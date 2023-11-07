// ./frontend/src/components/Customers/ListView/ListView.js
import React, { useState } from 'react';
import './CustomerListItem.css';
import DetailsPanel from '../DetailsPanel/DetailsPanel';

const CustomerListItem = ({ customer, isExpanded, onToggle, onEdit  }) => {
    return (
        <div className={`customer-item ${isExpanded ? 'expanded' : ''}`} onClick={onToggle}>
            <h2>{customer.FirstName} {customer.LastName}</h2>
            {isExpanded && <div className="customer-details">
                <DetailsPanel customer={{
                    name: `${customer.FirstName} ${customer.LastName}`,
                    address: `${customer.StreetAddress}, ${customer.City}, ${customer.State}, ${customer.ZipCode}`,
                    email: `${customer.Email}`,
                    phone: `${customer.Phone}`,
                    id: customer.CustomerID
                }}
                onEdit={() => onEdit(customer)}  // Propagate the function
                />
            </div>}
        </div>
    );
}; 

export default CustomerListItem;
