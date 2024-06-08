
import './Productdescription.scss';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentSms } from '@fortawesome/free-solid-svg-icons';
import ImageZoom from './ImageZoom';
function PreWithLimit({ text, limit }) {
    const [expanded, setExpanded] = useState(false);
    const lines = text.split('\n');

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
function Productdescription() {
    const [mainImage, setMainImage] = useState('https://down-vn.img.susercontent.com/file/e7dae1dbef95bd63efcc5b461df5090a');
    const [startIdx, setStartIdx] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const [linesToShow, setLinesToShow] = useState(9);

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
        },
        {
            url: "https://down-vn.img.susercontent.com/file/b3b7205ddd6212807882574ebaa47323",
            alt: "Thumbnail 7"
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
                            <picture className='IMAW1w'>
                            <ImageZoom src={mainImage} zoomFactor={2} zoomAreaSize={125} /> {/* Sử dụng component ImageZoom */}
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
                <section className="flex flex-auto i9t0tr">
                    <div className="flex-auto flex-column  DXQgih">
                        <div className="WBVL_7">
                            <img alt="shopee choice badge" class="uq_xEP" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/a60ce3c82eeb30458e75.svg"></img>
                            <span>Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn</span>
                        </div>
                        <div className="flex flex-column mt-3">
                            <div className="flex flex-column CWiSMQ">
                                <section className="flex items-center" aria-live="polite">
                                    <div className="flex items-center QAc7_y">
                                        <div className="qg2n76">₫169.292</div>
                                        <div className="flex items-center">
                                            <div className="G27FPf"> 137.000VN₫
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
                                    <PreWithLimit
                                        text={`Thông TIN ĐO LƯỜNG
[Thông tin size áo đi biển] Công ty: CM
Kích thước, chiều dài, Chiều rộng ngực, Chiều rộng vai, Chiều dài tay áo, Vòng bít
M 69 96 43 24 19
L 71 100 45 25 20
Xl 73 104 47 26 21
2xl 75 108 49 27 22
3xl 77 112 51 28 23
4xl 79 116 53 29 24
5xl 80 120 55 30 25
Lưu ý: Do các phương pháp đo lường khác nhau, sẽ có sự khác biệt1-3CMError, dữ liệu liên quan chỉ mang tính chất tham khảo, tùy thuộc vào đối tượng thực tế nhận được.
Vải / kết cấu của vật liệu: sợi polyeste / polyester (sợi polyeste)
Nội dung thành phần: 91% (bao gồm) -95% (bao gồm)
Chiều dài tay áo: Tay áo ngắn
Chiều dài quần: Capris
Phong cách: thời gian giải trí
Có thể nói về chiều cao và cân nặng để cung cấp cho chúng tôi, chúng tôi đưa ra lời khuyên chuyên nghiệp cho bạn`}
                                        limit={linesToShow}
                                    />
                                    {!isExpanded && (
                                        <button id='view-more-btn' onClick={handleViewMore}>...Xem thêm</button>
                                    )}
                                </div>

                            </div>
                        </div>
                        <div className="bwPwYa high-end-button-group">
                            <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer">
                                <button type="button" class="btn btn-solid-primary btn--l YuENex" aria-disabled="false" ><FontAwesomeIcon icon={faCommentSms} />Liên hệ Ngay</button>
                            </a>
                        </div>
                    </div>
                </section>

            </div>

        </div>

    );
}

export default Productdescription;