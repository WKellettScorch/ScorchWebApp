// frontend/components/Login/AuthContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import { login as apiLogin } from '../../api/LoginAPI';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: localStorage.getItem('token') || null,
        clientId: localStorage.getItem('clientId') || null,
    });

    useEffect(() => {
        // Update local storage whenever authState changes
        localStorage.setItem('token', authState.token);
        localStorage.setItem('clientId', authState.clientId);
    }, [authState]);

    const login = async (username, password) => {
        try {
            const { clientId, token } = await apiLogin(username, password);
            setAuthState({ token, clientId });
            // The actual setting to localStorage is handled in useEffect
        } catch (error) {
            console.error('Login error:', error);
            throw error; // Rethrow to handle it in the Login component
        }
    };

    const logout = () => {
        setAuthState({ token: null, clientId: null });
        localStorage.removeItem('token');
        localStorage.removeItem('clientId');
    };

    return (
        <AuthContext.Provider value={{ ...authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
