import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState(null);

    const handleLogin = (userData) => {
        setLogin(true);
        setUser(userData);
    };

    const handleLogout = () => {
        setLogin(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ login, user, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}