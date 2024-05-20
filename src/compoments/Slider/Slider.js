import React from 'react';
import './Slider.scss';
import background from '../img/nenao.jpg'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faSquarePhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
const Slider = (props) => {


    return (
        <div>
            <div class="Slider-container" >
               <div class="Background">
                <div class="row container Logo-container">
                    <div class="Logo col-3 rounded">
                    <a href="https://www.facebook.com/ducanhle210905" target="_blank" rel="noopener noreferrer">
                    <img class="Logo-img" src={logo} alt="Description of the image"/>
                    </a>
                        <div class="shopInfo">
                            <h4 class="nameShop"><a href="https://www.facebook.com/ducanhle210905" target="_blank" rel="noopener noreferrer">ASIN STORE</a></h4>
                            <p><FontAwesomeIcon icon={faCircleInfo} />       Contact: </p>
                            <p><FontAwesomeIcon icon={faSquarePhoneFlip} />         Phone number: 0869 014 634</p>
                            <p><FontAwesomeIcon icon={faFacebook} />               <a href="https://www.facebook.com/ducanhle210905" target="_blank" rel="noopener noreferrer">Follow Page: ASIN STORE</a></p>
                            <p><FontAwesomeIcon icon={faHouseChimney} />            Địa Chỉ: </p>
                        </div>
                    </div>
                    <div class="Description col-3 rounded">
                        <div>
                            <h5>Mô tả </h5>
                            <p><FontAwesomeIcon icon={faStar} />   ASIN STORE – chuỗi cửa hàng bán lẻ thời trang nam   <FontAwesomeIcon icon={faStar} /></p>
                            <p>Chuyên cung cấp và phân phối các sản phẩm:</p>
                            <p>- Dòng sản phẩm về Áo: áo thun, áo polo, áo ba lỗ, áo len, áo nỉ, áo khoác, áo hoodie</p>
                            <p>- Dòng sản phẩm về quần: quần jean, quần jogger – quần dài, quần tây, quần short, quần kaki</p>
                            <p>- ASIN STORE còn cung cấp các sản phẩm giày dép,...</p>
                        </div>
                    </div>
                </div>
               <img class="Background-img" src={background}/>
               
               </div>
            </div>
        </div>
    );
}

export default Slider;