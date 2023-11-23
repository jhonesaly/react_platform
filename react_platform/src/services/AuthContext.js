import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(false);

    const handleLogin = () => {
        setLogin(true);
    };

    const handleLogout = () => {
        setLogin(false);
    };

    return (
        <AuthContext.Provider value={{ login, handleLogin, handleLogout }}>
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