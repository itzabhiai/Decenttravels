import React, { useState, useEffect } from 'react';
import './ImageGallery.css';
import Loder from '../Conatiner/Comonets/Loder';

const ImageGallery = () => {
  const images = [
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700804/IMG-20230718-WA0029_e13u4u.jpg',
    
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700806/IMG-20230718-WA0016_zlvxvt.jpg',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700806/IMG-20230718-WA0015_a9pnc9.jpg',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700806/IMG-20230718-WA0019_qajj6v.jpg',
    
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700806/IMG-20230718-WA0018_geskji.jpg',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700804/IMG-20230718-WA0027_uyivcu.jpg',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700806/IMG-20230718-WA0020_bnzkde.jpg',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700805/IMG-20230718-WA0024_kxmnfa.jpg',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700806/IMG-20230718-WA0028_z7blry.jpg',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700805/IMG-20230718-WA0021_lhkvrj.jpg',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700805/IMG-20230718-WA0023_uotfgq.jpg',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700805/IMG-20230718-WA0022_hfnkbo.jpg',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700805/IMG-20230718-WA0025_rdzm2u.jpg',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700805/IMG-20230718-WA0030_nzygvw.jpg',
   
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700804/IMG-20230718-WA0026_wzvh5i.jpg',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700804/IMG-20230718-WA0031_d8uxpj.jpg',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700804/IMG-20230718-WA0014_yrjdsz.jpg',
    'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689700806/IMG-20230718-WA0017_eowhwv.jpg',
    
  ];

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loder />
      ) : (
        <div className='maing'>
          <div className='hero'>
            <h1>Our Images Gallery</h1>
          </div>
          <div className="image-gallery">
            {images.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Images ${index}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
