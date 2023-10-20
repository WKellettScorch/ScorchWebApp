//.\frontend\scorch-web-app\src\components\Customers\SearchAndFilterSection\SearchAndFilterSection.js
import React, { useState } from 'react';
import './SearchAndFilterSection.css';

const SearchAndFilterSection = ({ onSearch }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    return (
        <div className="search-and-filter">
            <input 
                type="text" 
                placeholder="Search by name..."
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Search by email..."
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Search by address..."
                value={address}
                onChange={e => setAddress(e.target.value)}
            />
            {/* Using ClientID 1 for testing. REMINDER: Make dynamic later.*/}
            <button onClick={() => onSearch(1, name, email, address)}>Search</button>

        </div>
    );
}

export default SearchAndFilterSection;
