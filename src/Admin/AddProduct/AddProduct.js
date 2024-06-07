
import '../../compoments/Productdescription/Productdescription.scss';
import './AddProduct.scss';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentSms } from '@fortawesome/free-solid-svg-icons';
import add from '../../compoments/img/instagram-3814061_1280.webp'
import ModalDelete from '../ModalDelete';
import _ from 'lodash'
function PreWithLimit({ text = '', limit }) {
    function showUploadButton() {
        var uploadButton = document.getElementById("uploadButton");
        uploadButton.style.display = "block"; // Hiển thị nút tải ảnh lên khi click vào ảnh
    }
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

function Addproduct() {
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [mainImage, setMainImage] = useState(add);
    const [startIdx, setStartIdx] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const [linesToShow, setLinesToShow] = useState(9);
    const [isEditing, setIsEditing] = useState(false);
    const [product, setProduct] = useState({});

    const handleDeleteUser = async () => {
        setIsShowModalDelete(true);
    }
    const handleClose = () => {
        setIsShowModalDelete(false);

    }
    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
        // Lưu thông tin đã chỉnh sửa ở đây
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

    const handleProduct = (type, value) => {
        const _product = _.cloneDeep(product);
        _product[type] = value;

        setProduct(_product);
    }

    const thumbnails = [


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
        <>
            <div className="allBackground2">
                <div className="container rounded">
                    <section className="Allpicture">
                        <div className="flex flex-column">
                            <div className="shopee-image-container" onclick="uploadImage()">
                                <button id="uploadButton" onclick="uploadImage()">
                                    <picture>
                                        <img className="IMAW1w" src={mainImage} alt="Main Image"></img>
                                    </picture>
                                </button>
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
                            <button className="upload-btn">Upload Image</button>
                        </div>

                    </section>

                    <section className="flex flex-auto i9t0tr">
                        <div className="flex-auto flex-column  DXQgih">
                            <div className="WBVL_7">
                                <img alt="shopee choice badge" className="uq_xEP" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/a60ce3c82eeb30458e75.svg"></img>
                                {isEditing ? (
                                    <input type="text" value={product.name} onChange={(e) => handleProduct('name', e.target.value)} />
                                ) : (
                                    <span>{product.name}</span>
                                )}
                            </div>
                            <div className="flex flex-column mt-3">
                                <div className="flex flex-column CWiSMQ">
                                    <section className="flex items-center" aria-live="polite">
                                        <div className="flex items-center QAc7_y">
                                            {isEditing ? (
                                                <input type="text" value={product.price} onChange={(e) => handleProduct('price', e.target.value)} />
                                            ) : (
                                                <div className="qg2n76">{product.price}₫</div>
                                            )}
                                            <div className="flex items-center">
                                                {isEditing ? (
                                                    <input type="text" value={product.mainPrice} onChange={(e) => handleProduct('mainPrice', e.target.value)} />
                                                ) : (
                                                    <div className="G27FPf">{product.mainPrice}VN₫</div>
                                                )}
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
                                        {isEditing ? (
                                            <textarea value={product.description} onChange={(e) => handleProduct('description', e.target.value)} />
                                        ) : (
                                            <PreWithLimit text={product.description} limit={linesToShow} />
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

                                {isEditing ? (
                                    <button type="button" className="btn btn-solid-primary btn--l YuENex edit" aria-disabled="false" onClick={handleSave}>Lưu chỉnh sửa</button>
                                ) : (
                                    <button type="button" className="btn btn-solid-primary btn--l YuENex edit" aria-disabled="false" onClick={handleEdit}>Chỉnh sửa</button>
                                )}
                                <button type="button" className="btn btn-solid-primary btn--l YuENex delete" aria-disabled="false"
                                    onClick={() => handleDeleteUser()}
                                >Xóa sản phẩm</button>

                            </div>
                        </div>
                    </section>

                </div>

            </div>
            <ModalDelete
                show={isShowModalDelete}
                handleClose={handleClose}
            />
        </>


    );
}

export default Addproduct;