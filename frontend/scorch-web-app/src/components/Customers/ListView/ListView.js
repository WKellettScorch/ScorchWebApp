// ./frontend/src/components/Customers/ListView/ListView.js
import React, { useState, useEffect } from 'react';
import CustomerListItem from './CustomerListItem';
import './ListView.css';
import { getCustomerAddressesByClientID } from '../../../api/CustomerAPI';

const ListView = ({ customers: externalCustomers, setSelectedCustomer, selectedCustomerId, onEdit }) => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    const fetchCustomers = () => {
        getCustomerAddressesByClientID(1)
            .then(data => {
                setCustomers(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    };

    const refreshCustomersList = () => {
        setLoading(true); // Set loading to true to show a loading indicator
        fetchCustomers();
    };

    useEffect(() => {
        // Using ClientID 1 for testing. REMINDER: Make dynamic later.
        // Only fetch if there's no external data provided
        if (externalCustomers.length === 0) {
            fetchCustomers();
        } else {
            setCustomers(externalCustomers);
            setLoading(false);
        }
    }, [externalCustomers]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="customer-list">
            <button className="button" onClick={refreshCustomersList}>Refresh List</button>
            {customers.map(customer => 
                <CustomerListItem 
                    key={customer.CustomerID} 
                    customer={customer} 
                    isExpanded={customer.CustomerID === selectedCustomerId}
                    onToggle={() => {
                        setSelectedCustomer(customer);  // This will now pass the entire customer object with "CustomerID" field
                    }}
                    onEdit={() => onEdit(customer)}  // Propagate the function
                />
            )}
        </div>
    );
}

export default ListView;
