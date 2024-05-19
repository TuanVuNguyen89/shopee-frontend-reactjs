import React from 'react';
import './Slider.scss';
import background from '../img/nenao.jpg'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';

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
                        <div >
                            <h4 class="nameShop"><a href="https://www.facebook.com/ducanhle210905" target="_blank" rel="noopener noreferrer">ASIN STORE</a></h4>
                            <p>Contact: </p>
                            <p>Phone number: 0869 014 634</p>
                            <p><a href="https://www.facebook.com/ducanhle210905" target="_blank" rel="noopener noreferrer">Follow Page: ASIN STORE</a> </p>
                            <p>Địa Chỉ: </p>
                        </div>
                    </div>
                    <div class="Description col-3 rounded">
                        <div>
                            <h5>Mô tả </h5>
                            <p>ASIN STORE – chuỗi cửa hàng bán lẻ thời trang nam</p>
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