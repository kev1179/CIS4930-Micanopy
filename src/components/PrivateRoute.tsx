import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Null for loading state

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await axios.get('/api/auth/getAuthStatus', { withCredentials: true });
                setIsAuthenticated(response.data.authenticated);
            } catch (error) {
                console.error('Error checking auth status:', error);
                setIsAuthenticated(false as any);
            }
        };

        checkAuthStatus();
    }, []);

    if (isAuthenticated === null) return (
        <p>Loading...</p>
);

    console.log(isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
