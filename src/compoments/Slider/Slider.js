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
import { readShopInfo } from '../../services/shopService';
import { useEffect, useState } from 'react';
import { Buffer } from 'buffer';
const Slider = (props) => {

    const [listInfo, setListInfo] = useState([]);
    useEffect(() => {
        setShopInfo();
    }, []);

    const setShopInfo = async () => {
        let response = await readShopInfo();

        //console.log(">>> response.DT: ", response.DT[0]);
        if (response && response.EC === 0) {
            let imageBase64Logo = '', imageBase64Background = '';
            if (response.DT[0].logo) {
                imageBase64Logo = new Buffer(response.DT[0].logo, 'base64').toString('binary');
            }

            if (response.DT[0].background) {
                imageBase64Background = new Buffer(response.DT[0].background, 'base64').toString('binary');
            }

            setListInfo({
                name: response.DT[0].name,
                contact: response.DT[0].contact,
                phone: response.DT[0].phone,
                page: response.DT[0].page,
                address: response.DT[0].address,
                logo: imageBase64Logo,
                background: imageBase64Background,
                description: response.DT[0].description,
            });
            //console.log(">>> listInfo", listInfo);
        }
    }

    return (
        <div>
            <div className="Slider-container" >
                <div className="Background">
                    <div className="row container Logo-container">
                        <div className="Logo col-3 rounded">
                            <a href={listInfo.contact} target="_blank" rel="noopener noreferrer">
                                <img className="Logo-img" src={listInfo.logo} alt="Description of the image" />
                            </a>
                            <div className="shopInfo">
                                <h4 className="nameShop"><a href={listInfo.contact} target="_blank" rel="noopener noreferrer">{listInfo.name}</a></h4>
                                <p><FontAwesomeIcon icon={faCircleInfo} />       Contact: {listInfo.contact} </p>
                                <p><FontAwesomeIcon icon={faSquarePhoneFlip} />         Phone number: {listInfo.phone}</p>
                                <p><FontAwesomeIcon icon={faFacebook} />               <a href={listInfo.contact} target="_blank" rel="noopener noreferrer">Follow Page:  {listInfo.page} </a></p>
                                <p><FontAwesomeIcon icon={faHouseChimney} />            Địa Chỉ: {listInfo.address} </p>
                            </div>
                        </div>
                        <div className="Description col-3 rounded">
                            <div>
                                <pre>{listInfo.description}</pre>
                            </div>
                        </div>
                    </div>
                    <img className="Background-img" src={listInfo.background} />

                </div>
            </div>
        </div>
    );
}

export default Slider;