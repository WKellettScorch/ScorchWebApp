//.\fronted\src\components\Customers\CustomersView.js
import React, { useState, useEffect } from 'react';

// Import components
import Header from './Header/Header';
import AddCustomerButton from './Header/AddCustomerButton';
import SearchAndFilterSection from './SearchAndFilterSection/SearchAndFilterSection';
import ListView from './ListView/ListView';
import { searchCustomersByFields } from '../../api/CustomerAPI';
import AddCustomerForm from './Header/AddCustomerForm';
import EditCustomerForm from './Header/EditCustomerForm';

const CustomersView = () => {
    // A state to store all customers
    const [customers, setCustomers] = useState([]);
    
    // A state to store filtered or sorted customers
    const [displayedCustomers, setDisplayedCustomers] = useState([]);

    // A state to store selected customer details for the details panel
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [editingCustomer, setEditingCustomer] = useState(null);

    // This would fetch customers from API or any other source.
    // I've used useEffect for demonstration but you'll integrate it with your actual API calls or data fetching mechanism.
    useEffect(() => {
        // Fetch customers from API or any other source
        // and set the fetched data to 'customers' state
        // For demonstration, let's assume we fetch the below data
        const fetchedCustomers = [
            // example customer data
        ];
        setCustomers(fetchedCustomers);
        setDisplayedCustomers(fetchedCustomers);
    }, []);

    const handleSearch = (clientID, name, email, address) => {
        searchCustomersByFields(clientID, name, email, address)
            .then(searchedCustomers => {
                setDisplayedCustomers(searchedCustomers);
            })
            .catch(error => {
                console.error(error);
            });
    }
    
        const handleEditCustomerClick = (customer) => {
            console.log("Edit button clicked in CustomersView");
        setEditingCustomer(customer);
        setShowEditForm(true);


    };
    
    const handleAddCustomerClick = () => {
    setShowAddForm(true);
};

const handleCloseAddForm = () => {
    setShowAddForm(false);
};

    return (
    <div className="customers-view-container">
        <Header/>	
        <SearchAndFilterSection onSearch={handleSearch} />
        <ListView
  customers={displayedCustomers}
  setSelectedCustomer={setSelectedCustomer}
  selectedCustomerId={selectedCustomer ? selectedCustomer.CustomerID : null}
  onEdit={handleEditCustomerClick}
>
  <AddCustomerButton onClick={handleAddCustomerClick} />
</ListView>

        {showAddForm && <AddCustomerForm onClose={handleCloseAddForm} />}

	{showEditForm && <EditCustomerForm onClose={() => setShowEditForm(false)} customer={editingCustomer} />}
            
        </div>
    );
}

export default CustomersView;
