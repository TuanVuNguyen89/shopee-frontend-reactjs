import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useState, useEffect } from 'react';
import PrivateRoutes from "./PrivateRoutes";
import Test from '../compoments/Test/Test'
import Product1 from '../compoments/Product1/Product1'
import Product2 from '../compoments/Product2/Product2'
import Product3 from '../compoments/Product3/Product3'
import Adminlogin from '../Admin/Adminlogin';
import Allproduct from '../compoments/Allproduct/Allproduct';
import Productdescription from '../compoments/Productdescription/Productdescription';

const AppRoutes = (props) => {
    const Project = () => {
        return (
            <span>project</span>
        )
    }

    useEffect(() => {
        //console.log(">>> check: ", user);
        console.log(">>> current url", window.location.pathname);
    }, []);

    return (<>
        <Switch>
            <PrivateRoutes path="/test" component={Test} />

            <Route path="/product" exact>
                <Productdescription />
            </Route>
            <Route path="/product1">
                <Product1 />
            </Route>
            <Route path="/product2">
                <Product2 />
            </Route>
            <Route path="/product3">
                <Product3 />
            </Route>
            <Route path="/" exact>
                <Allproduct />
            </Route>
            <Route path="/admin">
                <Adminlogin />
            </Route>
            <Route path="*">
                404 not found
            </Route>
        </Switch>
    </>);
}

export default AppRoutes;