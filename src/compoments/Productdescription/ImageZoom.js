import React, { useState } from 'react';
import './ImageZoom.scss';

const ImageZoom = ({ src, zoomFactor = 2, zoomAreaSize = 125 }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setHoverPosition({ x, y });
  };

  return (
    <div
      className="image-zoom-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: '100%', // Giữ nguyên kích thước ảnh gốc
      }}
    >
      {isHovering && (
         <div
         className="zoom-area"
         style={{
           width: `${zoomAreaSize}px`,
           height: `${zoomAreaSize}px`,
           backgroundImage: `url(${src})`,
           backgroundSize: `${zoomFactor * 100*4}%`,
           backgroundPosition: `${hoverPosition.x}% ${hoverPosition.y}%`,
           left: `${hoverPosition.x}%`,
           top: `${hoverPosition.y}%`,
           transform: `translate(-${zoomAreaSize / 2}px, -${zoomAreaSize / 2}px)`,
         }}
       />
        
      )}
    </div>
  );
};

export default ImageZoom;
