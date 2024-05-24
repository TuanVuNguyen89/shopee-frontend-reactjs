
import './Productdescription.scss';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import ao5 from '../img/e7dae1dbef95bd63efcc5b461df5090a.jpg'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function Productdescription() {
    const [mainImage, setMainImage] = useState('https://down-vn.img.susercontent.com/file/e7dae1dbef95bd63efcc5b461df5090a');
    return (
        <div class="allBackground2">
            <div class="container">
                <section class="Allpicture">
                    <div class="flex flex-column">
                        <div class="shopee-image-container">
                            <picture>
                                <img class="IMAW1w" src={mainImage} alt="Main Image"></img>
                            </picture>
                        </div>
                        <div class="airUhU">
                            <div class="UBG7wZ">
                                <div class="jA1mTx">
                                    <div class="SarUkj shopee-image-container">
                                        <picture>
                                            <img
                                                class="IMAW1w"
                                                src="https://down-vn.img.susercontent.com/file/e7dae1dbef95bd63efcc5b461df5090a_tn"
                                                alt="Thumbnail 1"
                                                onMouseEnter={() => setMainImage('large_image1.jpg')}
                                                onMouseLeave={() => setMainImage('https://down-vn.img.susercontent.com/file/e7dae1dbef95bd63efcc5b461df5090a')}
                                            />
                                        </picture>
                                    </div>
                                    <div class="wOzCmT thumbnail-selected-mask"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <img
                    className="thumbnail"
                    src="https://down-vn.img.susercontent.com/file/c7094a5f60cb7ebbb3c0fda1de1f96d1_tn"
                    alt="Thumbnail 2"
                    onMouseEnter={() => setMainImage('large_image2.jpg')}
                    onMouseLeave={() => setMainImage('https://down-vn.img.susercontent.com/file/e7dae1dbef95bd63efcc5b461df5090a')}
                />
                <img
                    className="thumbnail"
                    src="https://down-vn.img.susercontent.com/file/f95d68eda8c707a0f306a7a2fc636eb2_tn"
                    alt="Thumbnail 3"
                    onMouseEnter={() => setMainImage('large_image3.jpg')}
                    onMouseLeave={() => setMainImage('https://down-vn.img.susercontent.com/file/e7dae1dbef95bd63efcc5b461df5090a')}
                />
            </div>

        </div>

    );
}

export default Productdescription;