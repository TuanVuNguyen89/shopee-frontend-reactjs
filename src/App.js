import Nav from './compoments/navigation/Nav';
import Productdescription from './compoments/Productdescription/Productdescription';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Allproduct from './compoments/Allproduct/Allproduct';
import Slider from './compoments/Slider/Slider'
import Adminlogin from './Admin/Adminlogin';
import Product1 from'./compoments/Product1/Product1'
import Product2 from'./compoments/Product2/Product2'
import Product3 from'./compoments/Product3/Product3'
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className='app-container'>
    <Slider/>
      <Nav/>
      <Switch>
      <Route path="/Productdescription/Productdescription">
            <Productdescription/>
          </Route>
          <Route path="/product1">
            <Product1/>
          </Route>
          <Route path="/product2">
            <Product2/>
          </Route>
          <Route path="/product3">
          <Product3/>
          </Route>
          <Route path="/" exact>
            <Allproduct/>
          </Route>
          <Route path="/admin">
            <Adminlogin/>
          </Route>
          <Route path ="*">
            404 not found
          </Route>
        </Switch>
        
    </div>
    </Router>
  );
}

export default App;