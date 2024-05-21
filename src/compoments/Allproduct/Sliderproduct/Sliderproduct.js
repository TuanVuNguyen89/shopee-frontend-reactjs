import React from 'react';
import { Image } from 'antd';
import Slider from 'react-slick';
import '../Sliderproduct/Sliderproduct.scss'; // Chắc chắn import SCSS đúng cách
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Sliderproduct = ({arrImages}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 4000

    };
    return (
       <Slider {...settings}>
         {arrImages.map((image) =>{
            return(
                <Image src={image} alt="Slider" preview={false} width="100%"/>
            )
         })}

       </Slider>
    );
}

export default Sliderproduct;
