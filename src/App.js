import Nav from './compoments/navigation/Nav';
import './App.scss';
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
            Tất cả sản phẩm
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
