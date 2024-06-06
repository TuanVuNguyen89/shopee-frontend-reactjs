import Nav from './compoments/navigation/Nav';
import Test from './compoments/Test/Test';
import Test2 from './compoments/Test/Test2'
import './App.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Slider from './compoments/Slider/Slider'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavHeader from './compoments/navigation/Nav';
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <Router>
      <div className="app-header">
        <NavHeader />
      </div>
      <div className='app-container'>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;