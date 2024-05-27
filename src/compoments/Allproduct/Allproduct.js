import React from 'react';
import Productdescription from '../Productdescription/Productdescription';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import { fetchAllUsers } from "../../services/shopService";
import '../Allproduct/Allproduct.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faArrowRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Sliderproduct from '../Allproduct/Sliderproduct/Sliderproduct';
import product from '../img/ao (1).jpg'
import product2 from '../img/cn-11134207-7r98o-lq1z2hqjp1qw5b.jpg'
import product3 from '../img/ao3.jpg'
import product4 from '../img/sg-11134201-7qvdo-lf2oc2bistpl1f.jpg'
import product5 from '../img/ao4.jpg'
import banner1 from '../img/vn-50009109-9f55e03457f53c21641e034794aa44a0_xxhdpi.jpg'
import banner2 from '../img/vn-50009109-eabbfa2e8ba38fa0d3ba2471c794a392_xxhdpi.jpg'
import banner3 from '../img/vn-50009109-7ff80d285f5ba47e46094b56c68d5f6a_xxhdpi.jpg'
import banner4 from '../img/ban4.jpg'


const Allproduct = (props) => {
    const [listUsers, setListUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentLimit, setCurrentLimit] = useState(2);
    const [totalPages, setTotalPages] = useState(10);
    useEffect(() => {
        fetchUsers();
    }, [currentPage]);

    const fetchUsers = async () => {
        let response = await fetchAllUsers(currentPage, currentLimit);
        //console.log(response);

        if (response && response.EC === 0) {
            // setListUsers(response.DT);
            //console.log(">>> check response", response.DT);

            //console.log(">>> check list users: ", response.DT.users);
            setTotalPages(response.DT.totalPages);
            setListUsers(response.DT.users);
        }
    };
    const handlePageClick = async (event) => {
        //console.log(">>> check data event", event);
        setCurrentPage(event.selected + 1);
        //await fetchUsers(event.selected + 1);
    };
    return (
        <div class="allBackground">
            <div class="recoment">
                <h5>GỢI Ý CHO BẠN</h5>
            </div>
            <div class="row">
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='../Productdescription/Productdescription'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product2} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Áo Sơ Mi Ngắn Tay Dáng Rộng In Họa Tiết Báo Thời Trang Hongkong Dành Cho Nam / Size m-5xl
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product3} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product4} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Mới Áo Thun polo Tay Lỡ Thời Trang Mùa Hè 2023 alphanumeric Phong Cách harajuku Trẻ Trung Dành Cho Nam
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product5} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Haibinzoulu Áo Thun polo Ngắn Tay Cổ Lọ Họa Tiết graffiti Cá Tính Cho Nam Nữ
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>


            </div>
            <div class="row">
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product2} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Áo Sơ Mi Ngắn Tay Dáng Rộng In Họa Tiết Báo Thời Trang Hongkong Dành Cho Nam / Size m-5xl
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product3} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product4} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Mới Áo Thun polo Tay Lỡ Thời Trang Mùa Hè 2023 alphanumeric Phong Cách harajuku Trẻ Trung Dành Cho Nam
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product5} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Haibinzoulu Áo Thun polo Ngắn Tay Cổ Lọ Họa Tiết graffiti Cá Tính Cho Nam Nữ
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>


            </div>
            <div class="Sliderproduct">
                <Sliderproduct arrImages={[banner1, banner2, banner3, banner4]} />
            </div>
            <div class="row">
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product2} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Áo Sơ Mi Ngắn Tay Dáng Rộng In Họa Tiết Báo Thời Trang Hongkong Dành Cho Nam / Size m-5xl
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product3} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product4} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Mới Áo Thun polo Tay Lỡ Thời Trang Mùa Hè 2023 alphanumeric Phong Cách harajuku Trẻ Trung Dành Cho Nam
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product5} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Haibinzoulu Áo Thun polo Ngắn Tay Cổ Lọ Họa Tiết graffiti Cá Tính Cho Nam Nữ
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>


            </div>
            <div class="row">
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product2} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Áo Sơ Mi Ngắn Tay Dáng Rộng In Họa Tiết Báo Thời Trang Hongkong Dành Cho Nam / Size m-5xl
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product3} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product4} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Mới Áo Thun polo Tay Lỡ Thời Trang Mùa Hè 2023 alphanumeric Phong Cách harajuku Trẻ Trung Dành Cho Nam
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>
                <div class="product col-xs-2 mt-2">
                    <div class="shopee_ic">
                        <div class="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                            <a class="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                <div class="flex flex-col bg-white cursor-pointer h-full">
                                    <div class="flex flex-col bg-white cursor-pointer h-full">
                                        <img src={product5} alt="Áo Sơ Mi Tay Ngắn Dáng Rộng In Họa Tiết Phong Cách Hawaii Nhanh Khô Thời Trang Đi Biển Cho Nam Và Nữ 7 Màu Lựa Chọn" class="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
                                    </div>
                                    <div class="p-2 flex-1 flex flex-col justify-between">
                                        <div class="space-y-1 mb-1 flex-1 flex flex-col justify-between min-h-[4rem]">
                                            <div class="line-clamp-2 break-words min-h-[2.5rem] text-sm">
                                                Haibinzoulu Áo Thun polo Ngắn Tay Cổ Lọ Họa Tiết graffiti Cá Tính Cho Nam Nữ
                                            </div>
                                        </div>
                                        <div class="flex-1 flex flex-col justify-between">
                                            <div class="mb-2 flex items-center">
                                                <span class="text-base5 truncate">137.000</span>
                                                <span class="text-base5">VN₫</span>
                                                <div class="buyicon">
                                                    <FontAwesomeIcon icon={faCartShopping} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-1"></div>
                </div>


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