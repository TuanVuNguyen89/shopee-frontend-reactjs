
import '../../compoments/Productdescription/Productdescription.scss';
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentSms } from '@fortawesome/free-solid-svg-icons';
import ModalDelete from '../ModalDelete';
import _ from 'lodash';
function PreWithLimit({ text = '', limit }) {
    function showUploadButton() {
        var uploadButton = document.getElementById("uploadButton");
        uploadButton.style.display = "block"; // Hiển thị nút tải ảnh lên khi click vào ảnh
    }
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
function Editproduct() {
    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [mainImage, setMainImage] = useState('');
    const [startIdx, setStartIdx] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const [linesToShow, setLinesToShow] = useState(9);
    const [isEditing, setIsEditing] = useState(false);
    const [product, setProduct] = useState({
        name: 'Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn', 
        price: '169.292', 
        mainPrice: '137.000',
        description: 'Thông TIN ĐO LƯỜNG\n[Thông tin size áo đi biển] Công ty: CM\nKích thước, chiều dài, Chiều rộng ngực, Chiều rộng vai, Chiều dài tay áo, Vòng bít\nM 69 96 43 24 19\nL 71 100 45 25 20\nXl 73 104 47 26 21\n2xl 75 108 49 27 22\n3xl 77 112 51 28 23\n4xl 79 116 53 29 24\n5xl 80 120 55 30 25\nLưu ý: Do các phương pháp đo lường khác nhau, sẽ có sự khác biệt1-3CMError, dữ liệu liên quan chỉ mang tính chất tham khảo, tùy thuộc vào đối tượng thực tế nhận được.\nVải / kết cấu của vật liệu: sợi polyeste / polyester (sợi polyeste)\nNội dung thành phần: 91% (bao gồm) -95% (bao gồm)\nChiều dài tay áo: Tay áo ngắn\nChiều dài quần: Capris\nPhong cách: thời gian giải trí\nCó thể nói về chiều cao và cân nặng để cung cấp cho chúng tôi, chúng tôi đưa ra lời khuyên chuyên nghiệp cho bạn'
    });
    const [thumbnails, setThumbnails] = useState([]);

    const [defaultThumbnails, setDefaultThumbnails] = useState([
        "https://down-vn.img.susercontent.com/file/e7dae1dbef95bd63efcc5b461df5090a",
        "https://down-vn.img.susercontent.com/file/f86370f91d761766e935d0bc225da135",
        "https://down-vn.img.susercontent.com/file/c7094a5f60cb7ebbb3c0fda1de1f96d1",
        "https://down-vn.img.susercontent.com/file/f95d68eda8c707a0f306a7a2fc636eb2",
        "https://down-vn.img.susercontent.com/file/901982047294e8e5c35cf8dc5dc03e72",
        "https://down-vn.img.susercontent.com/file/b3b7205ddd6212807882574ebaa47323",
    ]);

    const handleDeleteThumbnail = (index, isDefault) => {
        if (isDefault) {
            // Xóa ảnh từ danh sách defaultThumbnails
            const updatedDefaultThumbnails = [...defaultThumbnails];
            updatedDefaultThumbnails.splice(index, 1);
            setDefaultThumbnails(updatedDefaultThumbnails); // Thay bằng setThumbnails
        } else {
            // Xóa ảnh từ danh sách thumbnails
            const updatedThumbnails = [...thumbnails];
            updatedThumbnails.splice(index, 1);
            setThumbnails(updatedThumbnails);
        }
    };
    
    
    
    
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
        if (startIdx < thumbnails.length + defaultThumbnails.length - 5) {
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

    // useEffect(() => {
    //     console.log("product", product);
    // }, [product]);

    async function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => {
                resolve(reader.result)
            }
            reader.onerror = reject
        })
    }

    const handleUploadImage = async (event) => {
        let data = event.target.files;
        let file = data[0];

        if (file) {
            let base64 = await getBase64(file);
            //console.log(">>> base64 image", base64);

            setThumbnails(thumbnails => [...thumbnails, base64]);
            if (mainImage === '') setMainImage(base64);
        }

    };

    useEffect(() => {
        console.log("thumbnails", thumbnails);
    }, [thumbnails]);

   

    const renderThumbnails = () => {
        return [...thumbnails, ...defaultThumbnails].slice(startIdx, startIdx + 5).map((thumbnail, index) => (
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
                    <button onClick={() => handleDeleteThumbnail(index, index >= thumbnails.length)}>Xóa</button>
                   
                    <div className="wOzCmT thumbnail-selected-mask"></div>
                </div>
            </div>
        ));
    };
    
    return (
        <>
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
                        
                        Upload Image
                            <input type="file" className="upload-btn" onChange={(event) => handleUploadImage(event)}>
                            </input>
                    </div>
                </section>
                <section className="flex flex-auto i9t0tr">
                    <div className="flex-auto flex-column  DXQgih">
                        <div className="WBVL_7">
                            <img alt="shopee choice badge" class="uq_xEP" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/a60ce3c82eeb30458e75.svg"></img>
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
                                <button type="button" class="btn btn-solid-primary btn--l YuENex" aria-disabled="false" ><FontAwesomeIcon icon={faCommentSms} />Liên hệ Ngay</button>
                            </a>
                            {isEditing ? (
                                <button type="button" class="btn btn-solid-primary btn--l YuENex edit" aria-disabled="false" onClick={handleSave}>Lưu chỉnh sửa</button>
                            ) : (
                                <button type="button" class="btn btn-solid-primary btn--l YuENex edit" aria-disabled="false" onClick={handleEdit}>Chỉnh sửa</button>
                            )}
                            <button type="button" class="btn btn-solid-primary btn--l YuENex delete" aria-disabled="false" 
                            onClick={()=>handleDeleteUser()}
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

export default Editproduct;