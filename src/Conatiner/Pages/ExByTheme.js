import React from 'react';
import '../Style/expl.css';
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

const ExByTheme = () => {
  const imageCards = [
    {
      imageUrl: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689662986/Untitled_design_10_yepztz.png',
      title: 'Activities',
      description: 'Description for Card 1',
      link: '/activites' // Add the desired link for Card 1
    },
    {
      imageUrl: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1688325598/buildings-gc3d82b71f_1280_wuyfia.jpg',
      title: 'City Tours',
      description: 'Description for Card 2',
      link: '/city' // Add the desired link for Card 2
    },
    {
      imageUrl: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689671559/Untitled_design_16_heenl6.png',
      title: 'Kids',
      description: '',
      link: '/kids' // Add the desired link for Card 3
    },
    {
      imageUrl: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689671993/Untitled_design_17_fvedzv.png',
      title: 'Family Vications',
      description: '',
      link: '/family' // Add the desired link for Card 3
    },
    {
      imageUrl: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689672770/Untitled_design_18_ve2mll.png',
      title: 'Couple In The Air',
      description: '',
      link: '/couple' // Add the desired link for Card 3
    },
    // Add more image card objects as needed
  ];

  return ( 
    <div className='cardh'>
      <h1 style={{paddingTop:'90px'}}>EXPLORE BY THEMES <hr/></h1> 
    <div className="image-card-list">
      {imageCards.map((card, index) => (
        <Link to={card.link} key={index}>
          <ImageCard
            imageUrl={card.imageUrl}
            title={card.title}
           
          />
        </Link>
      ))}
    </div> </div>
  );
};

export default ExByTheme;
