import React, { useEffect, useState } from 'react';
import { getUserAccount } from '../services/loginService'
const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
    const userDefault = {
        isLoading: true,
        isAuthenticated: false,
        token: "fake token",
        account: {}
    }

    const [user, setUser] = useState(userDefault);

    useEffect(() => {
        const fetchUserAccount = async () => {
            let response = await getUserAccount();

            if (response && response.EC === 0) {
                let roles = response.DT.roles;
                let token = response.DT.token;

                let data = {
                    isAuthenticated: true,
                    token,
                    account: roles,
                    isLoading: false
                };

                setUser(data);
            } else {
                setUser({ ...userDefault, isLoading: false });
            }
        };

        fetchUserAccount();
    }, []);

    useEffect(() => {
        console.log("user", user);
    }, [user]);

    // Login updates the user data with a name parameter
    const loginContext = (userData) => {
        setUser({ ...userData, isLoading: false });
        //console.log('user', user);
    };

    // Logout updates the user data to default
    const logoutContext = () => {
        setUser({ ...userDefault, isLoading: false });
    };

    return (
        <UserContext.Provider value={{ user, loginContext, logoutContext }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };