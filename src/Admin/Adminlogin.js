import React from 'react';
import './Adminlogin.scss'
import { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faArrowRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { loginUser } from '../services/loginService'

const Adminlogin = (props) => {
    const history = useHistory();
    const [valueLogin, setValueLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        let response = await loginUser(valueLogin, password);
        //console.log(">>> check response", response);

        if (response && +response.EC === 0) {
            //success
            let roles = response.DT.data.DT;
            let token = response.DT.access_token;

            let data = {
                isAuthenticated: true,
                token,
                account: roles
            };

            history.push('/');
        }

        if (response && +response.EC !== 0) {
            //error
            alert(response.EM);
        }
    }

    return (
        <div className='_container_1fuww_1'>
            <div className="container">
                <div className="row mx-3 mx-sm-0">

                    <div className="content-right col-md-5 d-flex flex-column gap-1 py-3">
                        <h1 class="ant-typography _title_1fuww_6 css-wf7orr" title="Coach Login">Team Admin Login</h1>

                        <input type="text"
                            className="form-control"
                            placeholder="Account"
                            value={valueLogin}
                            onChange={(event) => { setValueLogin(event.target.value) }}
                        />

                        <input type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                        <button className="btn btn-primary" onClick={() => handleLogin()}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adminlogin;