import React from 'react';
import '../Allproduct/Allproduct.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faArrowRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { readProductInfoWithType } from '../../services/productService'
import { Buffer } from 'buffer';

const Allproduct = (props) => {

    const history = useHistory();
    const getProduct = (id) => {
        history.push('/product', { id });
    };

    const [listProduct, setListProduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentLimit, setCurrentLimit] = useState(20);
    const [totalPages, setTotalPages] = useState(0);
    const [currentCategoryId, setCurrentCategoryId] = useState(5);
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
        let response = await readProductInfoWithType(currentPage, currentLimit, currentCategoryId);

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
    };

    const handlePageClick = async (event) => {
        //console.log(">>> check data event", event);
        setCurrentPage(event.selected + 1);
        //await fetchUsers(event.selected + 1);
    };

    return (
        <div className="allBackground">
            <div className="recoment">
                <h5>GỢI Ý CHO BẠN</h5>
            </div>
            <div className="row">
                {(listProduct && listProduct.length > 0) ?
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
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    <p> Hiện tại không có sản phẩm nào </p>
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

export default Allproduct;