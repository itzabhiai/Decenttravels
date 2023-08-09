import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../Comonets/crosel.css"
function Crousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='maincrosel'>
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dlbp05ldk/image/upload/v1688326797/Untitled_2200_420_px_rr4moa.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dlbp05ldk/image/upload/v1688328022/Untitled_2200_420_px_1_hkmc18.png"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dlbp05ldk/image/upload/v1688328021/Untitled_2200_420_px_2_w21h52.png"
          alt="Third slide"
        />

       
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default Crousel;