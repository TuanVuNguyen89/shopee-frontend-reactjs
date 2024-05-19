import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';
const Nav = (props) => {
    return (
        <div >
            <div class="topnav" >
                <NavLink class="folder" to="/" exact>Tất cả sản phẩm</NavLink>
                <NavLink class="folder" to="/product1">Sản phẩm 1</NavLink>
                <NavLink class="folder" to="/product2">Sản phẩm 2</NavLink>
                <NavLink class="folder" to="/product3">Sản phẩm 3</NavLink>
                <NavLink class="folder" to="/product4">Sản phẩm 4</NavLink>
                <NavLink  to="/more">Thêm</NavLink>
            </div>
        </div>
    );
}

export default Nav;