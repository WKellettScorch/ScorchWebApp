//.\frontend\scorch-web-app\src\api\LoginAPI.js

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': 'any-value-works'
            },
            body: JSON.stringify({ username, password }),
        });
        if (!response.ok) {
        const errorDetails = await response.json(); // Assuming the server sends back a JSON response with an error message
        throw new Error(errorDetails.message || 'Server responded with an error'); // Customize error message as needed
        }
        return await response.json();
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};
