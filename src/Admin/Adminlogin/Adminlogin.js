import React from 'react';
import './Adminlogin.scss'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faArrowRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
const Adminlogin = (props) => {
    return (
        <div className='_container_1fuww_1'>
        <div className="container">
            <div className="row mx-3 mx-sm-0">

                <div className="content-right col-md-5 d-flex flex-column gap-1 py-3">
                <h1 class="ant-typography _title_1fuww_6 css-wf7orr" title="Coach Login">Team Admin Login</h1>

                    <input type="text"
                        className="form-control"
                        placeholder="Account"
                        // value={valueLogin}
                        // onChange={(event) => { setValueLogin(event.target.value) }}
                    />

                    <input type="password"
                        className="form-control"
                        placeholder="Password"
                        // value={password}
                        // onChange={(event) => { setPassword(event.target.value) }}
                    />
                    <button className="btn btn-primary" >Login</button>
                </div>
            </div>
        </div>
    </div>
        // <div className="_container_1fuww_1 ">
        //     <h1 class="ant-typography _title_1fuww_6 css-wf7orr" title="Coach Login">Team Admin Login</h1>
        //     <form className="ant-form ant-form-horizontal css-wf7orr _form_1fuww_13">
        //     <div className="ant-form-item css-wf7orr">
        //             <div className="ant-row ant-form-item-row css-wf7orr">
        //                 <div className="ant-col ant-form-item-control css-wf7orr">
        //                     <div className="ant-form-item-control-input">
        //                         <div className="ant-form-item-control-input-content">
        //                             <span className="ant-input-affix-wrapper css-wf7orr ant-input-outlined">
        //                                     <span className="ant-input-prefix">
        //                                     <FontAwesomeIcon icon={faUser} className="anticon anticon-user" />
        //                                     </span>
        //                                     <input placeholder="E-mail" id="email" aria-required="true" class="ant-input css-wf7orr" type="text">

        //                                     </input>
        //                             </span>

        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //         </div>
        //         <div className="ant-form-item css-wf7orr">
        //             <div className="ant-row ant-form-item-row css-wf7orr">
        //                 <div className="ant-col ant-form-item-control css-wf7orr">
        //                     <div className="ant-form-item-control-input">
        //                         <div className="ant-form-item-control-input-content">
        //                             <span className="ant-input-affix-wrapper css-wf7orr ant-input-outlined ant-input-password">
        //                                     <span className="ant-input-prefix">
        //                                     <FontAwesomeIcon icon={faLock}  className="anticon anticon-user" />
        //                                     </span>
        //                                     <input placeholder="Password" id="password" aria-required="true" type="password" class="ant-input css-wf7orr">
        //                                         </input>
        //                             </span>

        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //         </div>
        //         <div className="ant-form-item css-wf7orr">
        //             <div className="ant-row ant-form-item-row css-wf7orr">
        //                 <div className="ant-col ant-form-item-control css-wf7orr">
        //                     <div className="ant-form-item-control-input">
        //                         <div className="ant-form-item-control-input-content">
        //                         <button type="submit" class="ant-btn css-wf7orr ant-btn-primary _loginBtn_1fuww_9"><span>Sign In</span></button>

        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //         </div>

        //     </form>
        // </div>
    );
}

export default Adminlogin;