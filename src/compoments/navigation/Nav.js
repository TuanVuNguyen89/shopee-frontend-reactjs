import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Nav = (props) => {
    return (
        <div >
            <div class="topnav" >
                <NavLink className="folder" to="/" exact>Tất cả sản phẩm</NavLink>
                <NavLink className="folder" to="/product1"> Áo nam</NavLink>
                <NavLink className="folder" to="/product2">Sản phẩm 2</NavLink>
                <NavLink className="folder" to="/product3">Sản phẩm 3</NavLink>
                <NavLink className="folder" to="/product4">Sản phẩm 4</NavLink>
                <NavLink  to="/more">Thêm <FontAwesomeIcon icon={faCaretDown} /></NavLink>
            </div>
        </div>
    );
}

export default Nav;