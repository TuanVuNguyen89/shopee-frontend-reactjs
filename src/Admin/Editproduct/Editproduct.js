
import '../../compoments/Productdescription/Productdescription.scss';
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentSms } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useHistory } from 'react-router-dom';
import ModalDelete from '../ModalDelete';
import { Buffer } from 'buffer';
import { readProductInfoWithId, readImageInfoWithId, editProduct, deleteProduct } from '../../services/productService';
import _ from 'lodash';
function PreWithLimit({ text = '', limit }) {
    function showUploadButton() {
        var uploadButton = document.getElementById("uploadButton");
        uploadButton.style.display = "block"; // Hiển thị nút tải ảnh lên khi click vào ảnh
    }
    const [expanded, setExpanded] = useState(false);
    const lines = (text || '').split('\r\n'); // Provide a default empty string

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
    const history = useHistory();
    const location = useLocation();
    const { id } = location.state || {};

    const [isShowModalDelete, setIsShowModalDelete] = useState(false);
    const [startIdx, setStartIdx] = useState(0);
    const [defaultImage, setDefaultImage] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [linesToShow, setLinesToShow] = useState(9);
    const [isEditing, setIsEditing] = useState(false);
    const [product, setProduct] = useState({});
    const [thumbnails, setThumbnails] = useState([]);

    const handleDeleteThumbnail = (index) => {
        const updatedThumbnails = [...thumbnails];
        updatedThumbnails.splice(index, 1);
        setThumbnails(updatedThumbnails);
    };

    const handleDeleteUser = async () => {
        setIsShowModalDelete(true);
    }

    const confirmDeleteProduct = async () => {
        let res = await deleteProduct(id);

        if (res && res.EC === 0) {
            history.push('/admin-page');
        }
        else {
            alert(res.EM);
        }
    }

    const handleClose = () => {
        setIsShowModalDelete(false);

    }
    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        setIsEditing(false);

        let _product = _.cloneDeep(product);

        if (thumbnails.length > 0) {
            _product = { ..._product, mainImage: thumbnails[0] };
            _product = { ..._product, image: thumbnails };
        }

        setProduct(_product);
        const res = await editProduct(_product);
        console.log(res);

        if (res && res.EC !== 0) {
            alert(res.EM);
        }
        else {
            history.push('/admin-page');
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
            if (defaultImage === '' && thumbnails.length > 0) setDefaultImage(thumbnails[0]);
        }

    };

    const convertToImage = async (image) => {
        let imageBase64 = '';
        if (image) {
            imageBase64 = new Buffer(image, 'base64').toString('binary');
        }

        return imageBase64;
    }

    useEffect(() => {
        fetchProduct();
        fetchImages();

        //console.log(">>> check thumbnails", thumbnails);
    }, []);

    const fetchImages = async () => {
        let response = await readImageInfoWithId(id);

        //console.log(">>> check response", response);
        if (response && response.DT.EC === 0) {
            const images = response.DT.DT;

            if (images) {
                const updatedImages = await Promise.all(images.map(async (item) => {
                    item.image = await convertToImage(item.image);
                    return item;
                }));

                updatedImages.map((image, index) => {
                    setThumbnails(thumbnails => [...thumbnails, image.image]);
                })
            }
        }
    }

    const fetchProduct = async () => {
        let response = await readProductInfoWithId(id);

        //console.log(">>> check response", response);
        if (response && response.DT.EC === 0) {
            let product = response.DT.DT;

            //console.log("this is product from server", product);
            if (product.image) {
                product.image = await convertToImage(product.image);
                setDefaultImage(product.image);
                delete product.image;
            }

            setProduct(product);

            // setListProduct(updatedProducts);
        }
    };

    const renderThumbnails = () => {
        return [...thumbnails].slice(startIdx, startIdx + 5).map((thumbnail, index) => (
            <div key={index} className="UBG7wZ">
                <div className="jA1mTx">
                    <div className="SarUkj shopee-image-container">
                        <picture>
                            <img
                                className="IMAW1w"
                                src={thumbnail}
                                alt={`Product ${index}`}
                                onMouseEnter={() => setDefaultImage(thumbnail)}
                                onMouseLeave={() => setDefaultImage(thumbnail)}
                            />
                        </picture>

                    </div>
                    <button onClick={() => handleDeleteThumbnail(index)}>Xóa</button>

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
                                    <img class="IMAW1w" src={defaultImage} alt="Main Image"></img>
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
                                            <div className="flex items-center">
                                                {isEditing ? (
                                                    <input type="text" value={product.price} onChange={(e) => handleProduct('price', e.target.value)} />
                                                ) : (
                                                    <div className="G27FPf">{product.price}VN₫</div>
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
                confirmDeleteProduct={confirmDeleteProduct}
            />
        </>

    );
}

export default Editproduct;