import React from 'react';
import './Loading.scss';
import loadingImage from '../img/drink.png';

const Loading = () => {
    return (
        <>
        <div className="loading-overlay"></div>
        <div className="loading-container">
        <img src={loadingImage} alt="Loading..." />
            Loading...
        </div>
    </>
    );
};

export default Loading;
