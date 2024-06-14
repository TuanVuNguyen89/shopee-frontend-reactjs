import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from "./PrivateRoutes";
import Test from '../compoments/Test/Test';
import Product1 from '../compoments/Product1/Product1';
import Product2 from '../compoments/Product2/Product2';
import Product3 from '../compoments/Product3/Product3';
import Adminlogin from '../Admin/Adminlogin/Adminlogin';
import Allproduct from '../compoments/Allproduct/Allproduct';
import Productdescription from '../compoments/Productdescription/Productdescription';
import Addproduct from '../Admin/AddProduct/AddProduct';
import Adminpage from '../Admin/Adminpage/Adminpage';
import Editproduct from '../Admin/Editproduct/Editproduct';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Allproduct />} />
            <Route path="/admin" element={<Adminlogin />} />
            <Route path="/product" element={<Productdescription />} />
            <Route path="/product1" element={<Product1 />} />
            <Route path="/product2" element={<Product2 />} />
            <Route path="/product3" element={<Product3 />} />
            <Route
                path="/test"
                element={
                    <PrivateRoutes>
                        <Test />
                    </PrivateRoutes>
                }
            />
            <Route
                path="/admin-page"
                element={
                    <PrivateRoutes>
                        <Adminpage />
                    </PrivateRoutes>
                }
            />
            <Route
                path="/AddProduct"
                element={
                    <PrivateRoutes>
                        <Addproduct />
                    </PrivateRoutes>
                }
            />
            <Route
                path="/edit-product"
                element={
                    <PrivateRoutes>
                        <Editproduct />
                    </PrivateRoutes>
                }
            />
            <Route path="*" element={<div>404 not found</div>} />
        </Routes>
    );
}

export default AppRoutes;
