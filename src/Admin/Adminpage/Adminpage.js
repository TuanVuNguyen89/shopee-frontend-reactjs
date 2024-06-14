import React from 'react';
import Productdescription from '../../compoments/Productdescription/Productdescription';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import { readProductInfo } from '../../services/productService'
import '../../compoments/Allproduct/Allproduct.scss';
import '../Adminpage/Adminpage.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faArrowRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Sliderproduct from '../../compoments/Allproduct/Sliderproduct/Sliderproduct';
import banner1 from '../../compoments/img/vn-50009109-9f55e03457f53c21641e034794aa44a0_xxhdpi.jpg'
import banner2 from '../../compoments/img/vn-50009109-eabbfa2e8ba38fa0d3ba2471c794a392_xxhdpi.jpg'
import banner3 from '../../compoments/img/vn-50009109-7ff80d285f5ba47e46094b56c68d5f6a_xxhdpi.jpg'
import banner4 from '../../compoments/img/ban4.jpg'
import productadd from '../../compoments/img/addproduct-01.png'
import { Buffer } from 'buffer';


const AdminAllproduct = (props) => {
    const navigate = useNavigate();
    const [listUsers, setListUsers] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentLimit, setCurrentLimit] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        fetchProducts();
    }, [currentPage]);

    const convertToImage = async (image) => {
        let imageBase64 = '';
        if (image) {
            imageBase64 = new Buffer(image, 'base64').toString('binary');
        }

        return imageBase64;
    }

    const fetchProducts = async () => {
        //console.log(">>> check page&limit", currentPage, currentLimit);
        let response = await readProductInfo(currentPage, currentLimit);

        //console.log(">>> check response", response);
        if (response && response.DT.EC === 0) {
            setTotalPages(response.DT.DT.totalPages);
            //setListProduct(response.DT.DT.products);
            const products = response.DT.DT.products;

            const updatedProducts = await Promise.all(products.map(async (item) => {
                item.image = await convertToImage(item.image);
                return item;
            }));

            setListProduct(updatedProducts);
        }
    }

    const handlePageClick = async (event) => {
        //console.log(">>> check data event", event);
        setCurrentPage(event.selected + 1);
        //await fetchUsers(event.selected + 1);
    };

    const getProduct = (id) => {
        navigate('/product', { id });
    };

    const editProduct = (id) => {
        navigate('/edit-product', { id });
    };

    return (
        <div className="allBackground">
            <div className="recoment">
                <h5>GỢI Ý CHO BẠN</h5>
            </div>
            <div class="product mt-2 flex flex-column">
                <div class="shopee_ic">
                    <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                        <a class="contents" href='../AddProduct'>
                            <div class="flex flex-col bg-white cursor-pointer h-full">
                                <div className="relative z-0 w-full pt-full">
                                    <img src={productadd} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                </div>

                            </div>
                        </a>
                    </div>
                </div>
                <div class="flex items-center space-x-1"></div>
            </div>
            <div className="row">
                {
                    listProduct.map((product, index) => {
                        return (
                            <div className="product col-xs-2 mt-2">
                                <div className="shopee_ic">
                                    <div className="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                                        <button className="contents" onClick={() => getProduct(product.id)}>
                                            <div className="flex flex-col bg-white cursor-pointer h-full">
                                                <div className="relative z-0 w-full pt-full">
                                                    <img src={product.image} alt={`${product.name}`} className="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                                </div>
                                                <div className="p-2 flex-1 flex flex-col justify-between">
                                                    <div className="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                                        <div className="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                            {product.name}
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 flex flex-col justify-between">
                                                        <div className="mb-2 flex items-center">
                                                            <span className="text-base5 truncate">{product.price}</span>
                                                            <span className="text-base5">VNĐ</span>
                                                            <div className="buyicon">
                                                                <FontAwesomeIcon icon={faCartShopping} />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="overlay">
                                            <a className="edit-btn" onClick={() => editProduct(product.id)}>Edit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="Sliderproduct">
                <Sliderproduct arrImages={[banner1, banner2, banner3, banner4]} />
            </div>
            <div className="row">
                {
                    listProduct.map((product, index) => {
                        return (
                            <div className="product col-xs-2 mt-2">
                                <div className="shopee_ic">
                                    <div className="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                                        <button className="contents" onClick={() => getProduct(product.id)}>
                                            <div className="flex flex-col bg-white cursor-pointer h-full">
                                                <div className="relative z-0 w-full pt-full">
                                                    <img src={product.image} alt={`${product.name}`} className="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                                </div>
                                                <div className="p-2 flex-1 flex flex-col justify-between">
                                                    <div className="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                                        <div className="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                            {product.name}
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 flex flex-col justify-between">
                                                        <div className="mb-2 flex items-center">
                                                            <span className="text-base5 truncate">{product.price}</span>
                                                            <span className="text-base5">VNĐ</span>
                                                            <div className="buyicon">
                                                                <FontAwesomeIcon icon={faCartShopping} />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                        <div className="overlay">
                                            <a className="edit-btn" onClick={() => editProduct(product.id)}>Edit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {totalPages > 0 &&
                <div className="user-footer">

                    <ReactPaginate
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={totalPages}
                        previousLabel="<"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </div>
            }



        </div>
    );
}

export default AdminAllproduct;