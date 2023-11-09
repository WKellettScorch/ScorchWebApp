//.\frontend\scorch-web-app\src\api\CustomerAPI.js

/*const API_URL = process.env.REACT_APP_API_URL;

export const getCustomerAddressesByClientID = async (clientID) => {
    try {
        const response = await fetch(`${API_URL}/api/customers/address/${clientID}`);
        if (!response.ok) {
            console.error('API response not OK:', response.status, response.statusText);
            throw new Error('Failed to fetch customer addresses');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching customer addresses:', error);
        throw error;
    }
}


export const searchCustomersByFields = async (clientID, name, email, address) => {
    const endpoint = '/api/customers/search';
    const url = new URL(`${API_URL}${endpoint}`);
    const params = { clientID, name, email, address }; 
    url.search = new URLSearchParams(params).toString();

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error('API response not OK:', response.status, response.statusText);
            throw new Error('Failed to fetch customers');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching customers:', error);
        throw error;
    }
}


// .\frontend\scorch-web-app\src\api\CustomerAPI.js

export const addCustomer = async (customerData) => {
    try {
        const response = await fetch(`${API_URL}/api/customers/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customerData)
        });
        if (!response.ok) {
            console.error('API response not OK:', response.status, response.statusText);
            throw new Error('Failed to add customer');
        }
        return await response.json();
    } catch (error) {
        console.error('Error adding customer:', error);
        throw error;
    }
}

export const editCustomer = async (customerData) => {
    try {
        console.log(customerData)
        const response = await fetch(`${API_URL}/api/customers/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customerData)
        });
        if (!response.ok) {
            console.error('API response not OK:', response.status, response.statusText);
            throw new Error('Failed to add customer');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating customer:', error);
        throw error;
    }
}

*/



// .\frontend\scorch-web-app\src\api\CustomerAPI.js

const API_URL = process.env.REACT_APP_API_URL;

export const getCustomerAddressesByClientID = async (clientID) => {
    try {
        const response = await fetch(`${API_URL}/api/customers/address/${clientID}`, {
            headers: {
                'ngrok-skip-browser-warning': 'any-value-works'
            }
        });
        if (!response.ok) {
            console.error('API response not OK:', response.status, response.statusText);
            throw new Error('Failed to fetch customer addresses');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching customer addresses:', error);
        throw error;
    }
};

export const searchCustomersByFields = async (clientID, name, email, address) => {
    const endpoint = '/api/customers/search';
    const url = new URL(`${API_URL}${endpoint}`);
    const params = { clientID, name, email, address };
    url.search = new URLSearchParams(params).toString();

    try {
        const response = await fetch(url, {
            headers: {
                'ngrok-skip-browser-warning': 'any-value-works'
            }
        });
        if (!response.ok) {
            console.error('API response not OK:', response.status, response.statusText);
            throw new Error('Failed to fetch customers');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching customers:', error);
        throw error;
    }
};

export const addCustomer = async (customerData) => {
    try {
        const response = await fetch(`${API_URL}/api/customers/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'any-value-works'
            },
            body: JSON.stringify(customerData)
        });
        if (!response.ok) {
            console.error('API response not OK:', response.status, response.statusText);
            throw new Error('Failed to add customer');
        }
        return await response.json();
    } catch (error) {
        console.error('Error adding customer:', error);
        throw error;
    }
};

export const editCustomer = async (customerData) => {
    try {
        console.log(customerData);
        const response = await fetch(`${API_URL}/api/customers/update`, {
            method: 'PUT', // PUT is typically used for updates, not POST
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'any-value-works'
            },
            body: JSON.stringify(customerData)
        });
        if (!response.ok) {
            console.error('API response not OK:', response.status, response.statusText);
            throw new Error('Failed to update customer');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating customer:', error);
        throw error;
    }
};
