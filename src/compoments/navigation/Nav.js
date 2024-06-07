import React, { useContext, useEffect } from 'react';
import './Nav.scss';
import { Link, NavLink, useLocation, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { UserContext } from "../../context/userContext"

const Nav = (props) => {
    const { user, logoutContext } = useContext(UserContext);

    useEffect(() => {
        console.log("this is a user", user);
    }, []);

    if (user && user.isAuthenticated) {
        return (
            <div className="topnav">
                <NavLink className="folder" to="/admin-page" exact>Tất cả sản phẩm</NavLink>
                <NavLink className="folder" to="/product1">Áo nam</NavLink>
                <NavLink className="folder" to="/product2">Sản phẩm 2</NavLink>
                <NavLink className="folder" to="/product3">Sản phẩm 3</NavLink>
                <NavLink className="folder" to="/product4">Sản phẩm 4</NavLink>
                <NavLink className="folder" to="/more">Xem thêm <FontAwesomeIcon icon={faCaretDown} /></NavLink>
            </div>
        );
    }
    else {
        return (
            <div className="topnav">
                <NavLink className="folder" to="/" exact>Tất cả sản phẩm</NavLink>
                <NavLink className="folder" to="/product1">Áo nam</NavLink>
                <NavLink className="folder" to="/product2">Sản phẩm 2</NavLink>
                <NavLink className="folder" to="/product3">Sản phẩm 3</NavLink>
                <NavLink className="folder" to="/product4">Sản phẩm 4</NavLink>
                <NavLink className="folder" to="/more">Xem thêm <FontAwesomeIcon icon={faCaretDown} /></NavLink>
            </div>
        );
    }

}

export default Nav;
