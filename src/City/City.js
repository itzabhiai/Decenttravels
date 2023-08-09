import React from 'react';
import '../Conatiner/Style/expl.css';
import { Link } from 'react-router-dom';

const ImageCard = ({ imageUrl, title, description }) => {
  return (
    <div className="image-card">
      <img
        className="image-card__image"
        src={imageUrl}
        alt=" images"
      />
      <div className="image-card__content">
        <h3 className="image-card__title">{title}</h3>
        <p className="image-card__description">{description}</p>
      </div>
    </div>
  );
};

const City = () => {
  const imageCards = [
    {
      imageUrl: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1688706601/Untitled_design_3_jvffbm.png',
      title: '',
      description: 'Dubai City Tour',
      link: '/dubai-city' // Add the desired link for Card 1
    },
    {
      imageUrl: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1688497807/Untitled_400_280_px_1280_853_px_3_jzbeny.png',
      title: '',
      description: 'Abu Dhabi City Tour',
      link: '/abudhabi-city' // Add the desired link for Card 2
    },
    {
      imageUrl: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689670702/Untitled_design_13_r7kltw.png',
      title: '',
      description: 'Half-Day Old and New Dubai Tour plus ticket entry to Dubai Frame with Transfers (Up to 58% Off)',
      link: '/dubai-frame' // Add the desired link for Card 3
    },
    {
        imageUrl: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689663820/Dubai_Dolphinarium_Show_with_Dhow_Cruise_Dinner_and_Live_Entertainment5_2_cyxrgr.png',
        title: '',
        description: 'Abu Dhabi City Tour with Entry Ticket to Louvre',
        link: '/louvre' // Add the desired link for Card 3
      },
     
    // Add more image card objects as needed
  ];

  return ( 
    <div className='cardh'>
      <h1 style={{paddingTop:'90px'}}> City Tours</h1> 
    <div className="image-card-list">
      {imageCards.map((card, index) => (
        <Link to={card.link} key={index}>
          <ImageCard
            imageUrl={card.imageUrl}
            title={card.title}
            description={card.description}
          />
        </Link>
      ))}
    </div> </div>
  );
};

export default City;
