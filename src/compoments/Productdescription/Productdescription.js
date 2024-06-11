
import './Productdescription.scss';
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import { faCommentSms } from '@fortawesome/free-solid-svg-icons';
import { readProductInfoWithId, readImageInfoWithId } from '../../services/productService';
import { Buffer } from 'buffer';
import ImageZoom from './ImageZoom';
function PreWithLimit({ text, limit }) {
    const [expanded, setExpanded] = useState(false);
    const lines = text.split('\r\n');

    const handleClick = () => {
        setExpanded(!expanded);
    };

    return (
        <pre>
            {expanded ? (
                text
            ) : (
                lines.slice(0, limit).join('\n')
            )}
            {!expanded && lines.length > limit && (
                <button className="more" onClick={handleClick}>... Xem thêm</button>
            )}
        </pre>
    );
}

const Productdescription = (props) => {
    const location = useLocation();
    const { id } = location.state || {};

    const [mainImage, setMainImage] = useState('');
    const [startIdx, setStartIdx] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const [linesToShow, setLinesToShow] = useState(9);
    const [thumbnails, setThumbnails] = useState([]);
    const [productInfo, setProductInfo] = useState([]);

    useEffect(() => {
        fetchProduct();
        fetchImages();

        //console.log(">>> check thumbnails", thumbnails);
    }, []);

    const convertToImage = async (image) => {
        let imageBase64 = '';
        if (image) {
            imageBase64 = new Buffer(image, 'base64').toString('binary');
        }

        return imageBase64;
    }

    const fetchImages = async () => {
        let response = await readImageInfoWithId(id);

        //console.log(">>> check response", response);
        if (response && response.DT.EC === 0) {
            const images = response.DT.DT;

            const updatedImages = await Promise.all(images.map(async (item) => {
                item.image = await convertToImage(item.image);
                return item;
            }));

            updatedImages.map((image, index) => {
                setThumbnails(thumbnails => [...thumbnails, image.image]);
            })
        }
    }

    useEffect(() => {
        console.log("thumbnails", thumbnails);
    }, [thumbnails]);

    const fetchProduct = async () => {
        let response = await readProductInfoWithId(id);

        console.log(">>> check response", response);
        if (response && response.DT.EC === 0) {
            let product = response.DT.DT;

            //console.log("product image from server: ", product.image);
            product.image = await convertToImage(product.image);
            //console.log("product image after changing: ", product.image);
            setProductInfo(product);
        }
    };

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleViewMore = () => {
        if (!isExpanded) {
            setLinesToShow(null); // Hiển thị tất cả các dòng
            setIsExpanded(true);
        }
    };

    const handleNext = () => {
        if (startIdx < thumbnails.length - 5) {
            setStartIdx((prevIdx) => prevIdx + 1);
        } else {
            setStartIdx(0);
        }
    };

    const handlePrevious = () => {
        if (startIdx > 0) {
            setStartIdx((prevIdx) => prevIdx - 1);
        } else {
            setStartIdx(thumbnails.length - 1);
        }
    };

    useEffect(() => {
        if (thumbnails.length > 0) setMainImage(thumbnails[0]);
    }, [thumbnails]);

    const renderThumbnails = () => {
        return thumbnails.slice(startIdx, startIdx + 5).map((thumbnail, index) => (
            <div key={index} className="UBG7wZ">
                <div className="jA1mTx">
                    <div className="SarUkj shopee-image-container">
                        <picture>
                            <img
                                className="IMAW1w"
                                src={thumbnail}
                                alt={`Product ${index}`}
                                onMouseEnter={() => setMainImage(thumbnail)}
                                onMouseLeave={() => setMainImage(thumbnail)}
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
                            <picture className='IMAW1w'>
                                <ImageZoom src={mainImage} zoomFactor={2} zoomAreaSize={125} /> {/* Sử dụng component ImageZoom */}
                            </picture>
                        </div>
                        <div className="airUhU" >
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
                <section className="flex flex-auto i9t0tr">
                    <div className="flex-auto flex-column  DXQgih">
                        <div className="WBVL_7">
                            <img alt="shopee choice badge" className="uq_xEP" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/a60ce3c82eeb30458e75.svg"></img>
                            <span>{productInfo.name}</span>
                        </div>
                        <div className="flex flex-column mt-3">
                            <div className="flex flex-column CWiSMQ">
                                <section className="flex items-center" aria-live="polite">
                                    <div className="flex items-center QAc7_y">
                                        <div className="flex items-center">
                                            <div className="G27FPf"> {productInfo.price}VN₫
                                            </div>
                                        </div>
                                        <img alt="Shopee Choice" className="JZVgBK" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/e8b4e9be6b3aa3eb04dd.svg"></img>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="at_ZtL CWiSMQ   ">
                            <div className="flex flex-column">
                                <div className="KIoPj6 aboutProduct">
                                    <h5>Mô tả sản phẩm </h5>
                                    {productInfo.description && (
                                        <PreWithLimit
                                            text={productInfo.description}
                                            limit={linesToShow}
                                        />
                                    )}
                                    {!isExpanded && (
                                        <button id='view-more-btn' onClick={handleViewMore}>...Xem thêm</button>
                                    )}
                                </div>

                            </div>
                        </div>
                        <div className="bwPwYa high-end-button-group">
                            <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-solid-primary btn--l YuENex" aria-disabled="false" ><FontAwesomeIcon icon={faCommentSms} />Liên hệ Ngay</button>
                            </a>
                        </div>
                    </div>
                </section>

            </div>

        </div>

    );
}

export default Productdescription;