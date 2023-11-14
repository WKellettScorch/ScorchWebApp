// ./frontend/src/components/Customers/ListView/ListView.js
import React, { useState } from 'react';
import './CustomerListItem.css';
import DetailsPanel from '../DetailsPanel/DetailsPanel';
import { getRelatedJobs } from '../../../api/JobsAPI'; // Adjust the import path as necessary

const CustomerListItem = ({ customer, isExpanded, onToggle, onEdit  }) => {
    // Function to handle viewing related jobs
    const handleViewRelatedJobs = async () => {
        try {
            // Assuming ClientID is hardcoded to 1, adjust as necessary
            const clientID = 1; 
            const relatedJobs = await getRelatedJobs(clientID, customer.CustomerID);
            console.log(relatedJobs); // Or handle the display of related jobs as needed
        } catch (error) {
            console.error('Failed to get related jobs:', error);
        }
    };

    return (
        <div className={`customer-item ${isExpanded ? 'expanded' : ''}`} onClick={onToggle}>
            <h2>{customer.FirstName} {customer.LastName}</h2>
            {isExpanded && <div className="customer-details">
                <DetailsPanel 
                    customer={{
                        name: `${customer.FirstName} ${customer.LastName}`,
                        address: `${customer.StreetAddress}, ${customer.City}, ${customer.State}, ${customer.ZipCode}`,
                        email: `${customer.Email}`,
                        phone: `${customer.Phone}`,
                        id: customer.CustomerID
                    }}
                    onEdit={() => onEdit(customer)}
                    onViewRelatedJobs={handleViewRelatedJobs} // Pass the handler to the DetailsPanel
                />
            </div>}
        </div>
    );
}; 

export default CustomerListItem;
