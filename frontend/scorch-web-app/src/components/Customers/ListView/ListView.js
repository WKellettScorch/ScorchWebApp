// ./frontend/src/components/Customers/ListView/ListView.js
import React, { useState, useEffect } from 'react';
import CustomerListItem from './CustomerListItem';
import './ListView.css';
import { getCustomerAddressesByClientID } from '../../../api/CustomerAPI';
import { useAuth } from '../../Login/AuthContext'; 


const ListView = ({ customers: externalCustomers, setSelectedCustomer, selectedCustomerId, onEdit, children }) => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL;
    const { clientId } = useAuth(); 


    const fetchCustomers = () => {
        getCustomerAddressesByClientID(clientId) // Use ClientID from AuthContext
            .then(data => {
                setCustomers(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
        console.log(`Requesting data from: ${API_URL}/api/customers/address/${clientId}`);
    };

    const refreshCustomersList = () => {
        setLoading(true); // Set loading to true to show a loading indicator
        fetchCustomers();
    };

    useEffect(() => {
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
            <div className='button-container'>
            <button className="button" onClick={refreshCustomersList}>Refresh List</button>
            {children}
            </div>
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
