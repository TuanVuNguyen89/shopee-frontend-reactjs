import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(UserContext);

    if (user.isLoading) {
        return <div>Loading...</div>;
    }

    if (user && user.isAuthenticated === true) {
        return children;
    } else {
        return <Navigate to="/" />;
    }
}

export default PrivateRoutes;
