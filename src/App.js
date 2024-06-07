import Nav from './compoments/navigation/Nav';
import Test from './compoments/Test/Test';
import Test2 from './compoments/Test/Test2'
import './App.scss';
import Addproduct from './Admin/AddProduct/AddProduct';
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

import { useEffect, useState, useContext } from 'react';
import { UserContext } from './context/userContext'

function App() {
  const { user } = useContext(UserContext);

  return (
    <Router>

      {user && user.isLoading ? <div> loading... </div> :
        <>
          <div className="shop-header">
            <Slider />
          </div>
          <div className="app-header">
            <NavHeader />
          </div>
          <div className='app-container'>
            <AppRoutes />

          </div>
        </>
      }
    </Router>
  );
}

export default App;