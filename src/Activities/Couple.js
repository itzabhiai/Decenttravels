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

const Couple = () => {
  const imageCards = [
    {
      imageUrl: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689673159/Untitled_design_19_hebsof.png',
      title: '',
      description: 'Dhow Cruise Creek',
      link: '/dow' // Add the desired link for Card 1
    },
    {
        imageUrl: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689663814/Untitled_design_12_jwkxgn.png',
        title: '',
        description: 'Marina Dhow Cruise With Dinner',
        link: '/marina' // Add the desired link for Card 3
      },
    // Add more image card objects as needed
  ];

  return ( 
    <div className='cardh'>
      <h1 style={{paddingTop:'90px'}}>Love In The Air</h1> 
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

export default Couple;
