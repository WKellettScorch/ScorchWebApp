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
            console.error('Login API response not OK:', response.status, response.statusText);
            throw new Error('Failed to login');
        }
        return await response.json();
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};
