import Nav from './compoments/navigation/Nav';
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Allproduct from './compoments/Allproduct/Allproduct';
import Slider from './compoments/Slider/Slider'
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
          <Route path="/news">
            news
          </Route>
          <Route path="/about">
            about
          </Route>
          <Route path="/contact">
          contact
          </Route>
          <Route path="/" exact>
            <Allproduct/>
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