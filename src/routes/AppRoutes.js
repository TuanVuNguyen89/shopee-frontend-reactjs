import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
} from "react-router-dom";
import { useState, useEffect } from 'react';
import PrivateRoutes from "./PrivateRoutes";
import { useLoading } from '../compoments/Loading/Loadingcontext';
import Loading from "../compoments/Loading/Loading";
import Test from '../compoments/Test/Test'
import Product1 from '../compoments/Product1/Product1'
import Product2 from '../compoments/Product2/Product2'
import Product3 from '../compoments/Product3/Product3'
import instance from "../setup/axios";
import Product4 from '../compoments/Product4/Product4'
import Product5 from '../compoments/Product5/Product5'
import Adminlogin from '../Admin/Adminlogin/Adminlogin';
import Allproduct from '../compoments/Allproduct/Allproduct';
import Productdescription from '../compoments/Productdescription/Productdescription';
import Addproduct from '../Admin/AddProduct/AddProduct';
import Adminpage from '../Admin/Adminpage/Adminpage'
import Editproduct from '../Admin/Editproduct/Editproduct'

const AppRoutes = (props) => {
    const location = useLocation();
    const { loading, setLoading } = useLoading(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [product, account] = await Promise.all([
                    instance.get('/api/v1/product'),
                    instance.get('/api/v1/account')
                ]);
                setLoading(false);
                // Update state with fetched data if needed
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [location.pathname, setLoading]);

    if (loading) {
        return <Loading />;
    }
    return (<>
        <Switch>
            <PrivateRoutes path="/test" component={Test} />
            <PrivateRoutes path="/admin-page" component={Adminpage} />
            <PrivateRoutes path='/AddProduct' component={Addproduct} />
            <PrivateRoutes path='/edit-product' component={Editproduct} />
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
            <Route path="/product4">
                <Product4 />
            </Route>
            <Route path="/more">
                <Product5 />
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