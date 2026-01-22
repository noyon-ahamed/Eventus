import React, { createContext, useContext, useState, ReactNode } from 'react';

type UserRole = 'Driver' | 'Admin' | null;

interface AuthContextType {
    isAuthenticated: boolean;
    userRole: UserRole;
    login: () => void;
    logout: () => void;
    setRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState<UserRole>(null);

    const login = () => setIsAuthenticated(true);
    const logout = () => {
        setIsAuthenticated(false);
        setUserRole(null);
    };
    const setRole = (role: UserRole) => setUserRole(role);

    return (
        <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout, setRole }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
