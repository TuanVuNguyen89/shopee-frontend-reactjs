import { useEffect, useState, useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useHistory, Redirect } from "react-router-dom";
import { UserContext } from '../context/userContext'

const PrivateRoutes = (props) => {
    const { user } = useContext(UserContext);
    let history = useHistory();

    if (user.isLoading) {
        // You can return a loading spinner or null while loading
        return <div>Loading...</div>;
    }

    if (user && user.isAuthenticated === true) {
        return (<>
            <Route path={props.path} component={props.component} />
        </>);
    }
    else {
        return (
            <Redirect to='/'>

            </Redirect>
        );
    }
}

export default PrivateRoutes;