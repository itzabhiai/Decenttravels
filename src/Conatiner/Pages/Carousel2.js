import React, { useState, useEffect, useCallback } from 'react';
import '../Style/cr.css';
import { FaCircleArrowLeft ,FaCircleArrowRight} from "react-icons/fa6";

const Carousel2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const desktopImages = [
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689599618/dec_img_800_420_px_1_w633yo.png',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689599618/dec_img_800_420_px_3_vqdn1g.png',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689599618/dec_img_800_420_px_d1foww.png',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689599618/dec_img_800_420_px_2_fbnzd4.png',
  ];

  const mobileImages = [
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689650384/mobile_bafnsw.png',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689650384/mobile_1_ruhpfn.png',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689650384/mobile_2_sjyweq.png',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689650421/mobile_3_nq5lkz.png',
  ];

  const images = isMobile ? mobileImages : desktopImages;

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Automatic sliding interval

    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <div className="carousel2">
      <div className="image-container">
        <img src={images[currentIndex]} alt="" />
        <div className="content-overlay">
          <h1 className='carah1'>Raj Tours </h1>
          <p className='carap'>   Unveiling the magic of Dubai: Your unforgettable journey starts here!</p>
          
        </div>
      </div>
      <div className="controls">
        <button className="arrow prev" onClick={handlePrev}>
         <FaCircleArrowLeft/>
        </button>
        <button className="arrow next" onClick={handleNext}>
         <FaCircleArrowRight/>
        </button>
      </div>
    </div>
  );
};

export default Carousel2;
