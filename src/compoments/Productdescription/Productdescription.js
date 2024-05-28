
import './Productdescription.scss';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Productdescription() {
    const [mainImage, setMainImage] = useState('https://down-vn.img.susercontent.com/file/e7dae1dbef95bd63efcc5b461df5090a');
     const [startIdx, setStartIdx] = useState(0);

    const handleNext = () => {
        if (startIdx < 1) {
            setStartIdx((prevIdx) => prevIdx + 1);
        }
    };

    const handlePrevious = () => {
        if (startIdx > 0) {
            setStartIdx((prevIdx) => prevIdx - 1);
        }
    };

    const thumbnails = [
        {
            url: "https://down-vn.img.susercontent.com/file/e7dae1dbef95bd63efcc5b461df5090a",
            alt: "Thumbnail 1"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/f86370f91d761766e935d0bc225da135",
            alt: "Thumbnail 2"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/c7094a5f60cb7ebbb3c0fda1de1f96d1",
            alt: "Thumbnail 3"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/f95d68eda8c707a0f306a7a2fc636eb2",
            alt: "Thumbnail 4"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/901982047294e8e5c35cf8dc5dc03e72",
            alt: "Thumbnail 5"
        },
        {
            url: "https://down-vn.img.susercontent.com/file/b3b7205ddd6212807882574ebaa47323",
            alt: "Thumbnail 6"
        }
    ];

    const renderThumbnails = () => {
        return thumbnails.slice(startIdx, startIdx + 5).map((thumbnail, index) => (
            <div key={index} className="UBG7wZ">
                <div className="jA1mTx">
                    <div className="SarUkj shopee-image-container">
                        <picture>
                            <img
                                className="IMAW1w"
                                src={thumbnail.url}
                                alt={thumbnail.alt}
                                onMouseEnter={() => setMainImage(thumbnail.url)}
                                onMouseLeave={() => setMainImage(thumbnail.url)}
                            />
                        </picture>
                    </div>
                    <div className="wOzCmT thumbnail-selected-mask"></div>
                </div>
            </div>
        ));
    };

    return (
        <div class="allBackground2">
            <div class="container rounded">
                <section class="Allpicture">
                    <div class="flex flex-column">
                        <div class="shopee-image-container">
                            <picture>
                                <img class="IMAW1w" src={mainImage} alt="Main Image"></img>
                            </picture>
                        </div>
                        <div class="airUhU" >
                            {renderThumbnails()}
                            <button className="shopee-icon-button nVAzDy CAvqYR" tabIndex="-1" onClick={handlePrevious}>
                                <img alt="icon arrow left bold" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/be6abcdf029c79bbafd9.svg" />
                            </button>
                            <button className="shopee-icon-button nVAzDy lWmpR1" tabIndex="-1" onClick={handleNext}>
                                <img alt="icon arrow right bold" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/8120e456c268426c4054.svg" />
                            </button>

                        </div>
                    </div>
                </section>
            </div>

        </div>

    );
}

export default Productdescription;