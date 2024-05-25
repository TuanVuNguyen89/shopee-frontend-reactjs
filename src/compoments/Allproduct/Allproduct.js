import { useEffect, useState } from 'react';
import { readProductInfo } from '../../services/productService'
import React from 'react';
import '../Allproduct/Allproduct.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
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
    const [listProduct, setlistProduct] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        await readProductInfo();
        let response = await readProductInfo();

        if (response && response.DT.EC === 0) {
            setlistProduct(response.DT.DT);
        }
    }

    return (
        <div className="allBackground">
            <div className="recoment">
                <h5>GỢI Ý CHO BẠN</h5>
            </div>

            <div className="row">
                {
                    listProduct.map((product, index) => {
                        return (
                            <div className="product col-xs-2 mt-2">
                                <div className="shopee_ic">
                                    <div className="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active hover:-translate-y-[1px] active:translate-y-0 relative hover:z-[1]">
                                        <a className="contents" href='https://www.youtube.com/watch?v=rO3Iq5i4osU'>
                                            <div className="flex flex-col bg-white cursor-pointer h-full">
                                                <div className="flex flex-col bg-white cursor-pointer h-full">
                                                    <img src={product2} alt={`${product.name}`} className="inset-y-0 w-full h-full pointer-events-none object-contain absolute" aria-hidden="true"></img>
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
                                        </a>
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

        </div>
    );
}

export default Allproduct;