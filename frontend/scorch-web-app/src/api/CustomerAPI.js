//.\frontend\scorch-web-app\src\api\CustomerAPI.js

export const getCustomerAddressesByClientID = (clientID) => {
    return fetch(`http://localhost:3000/api/customers/address/${clientID}`)
        .then(response => {
            if (!response.ok) {
                console.error('API response not OK:', response.status, response.statusText);
                throw new Error('Failed to fetch customer addresses');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching customer addresses:', error);
            throw error;
        });
}


export const searchCustomersByFields = (clientID, name, email, address) => {
    const url = new URL('http://localhost:3000/api/customers/search');
    const params = { clientID, name, email, address }; 
    url.search = new URLSearchParams(params).toString();

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                console.error('API response not OK:', response.status, response.statusText);
                throw new Error('Failed to fetch customers');
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched data:', data);
            return data;
        })
        .catch(error => {
            console.error('Error fetching customers:', error);
            throw error;
        });
}


// .\frontend\scorch-web-app\src\api\CustomerAPI.js

export const addCustomer = (customerData) => {
    return fetch('http://localhost:3000/api/customers/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customerData)
    })
    .then(response => {
        if (!response.ok) {
            console.error('API response not OK:', response.status, response.statusText);
            throw new Error('Failed to add customer');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error adding customer:', error);
        throw error;
    });
}

