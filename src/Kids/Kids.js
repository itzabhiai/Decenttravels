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

const Kids = () => {
  const imageCards = [
    {
      imageUrl: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689670914/Untitled_design_14_v5f7pr.png',
      title: '',
      description: 'Wild Wadi Water Park with Transfers - Dubai',
      link: '/wild' // Add the desired link for Card 1
    },
    {
      imageUrl: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689663699/Untitled_design_11_wrxzmf.png',
      title: '',
      description: 'Aquarium and Under Water Zoo Dubai Mall ',
      link: '/aquarium' // Add the desired link for Card 2
    },
    {
      imageUrl: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689670830/Untitled_design_15_pubfaz.png',
      title: '',
      description: 'Snow Park Dubai: Snow Park Tour Ski Dubai Polar Pass and Transfers - Dubai',
      link: '/snow' // Add the desired link for Card 3
    },
    {
        imageUrl: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689663691/Dubai_Dolphinarium_Show_with_Dhow_Cruise_Dinner_and_Live_Entertainment5_mrm88q.png',
        title: '',
        description: 'Dubai Dolphinarium Show with Dhow Cruise, Dinner and Live Entertainment',
        link: '/dolphin' // Add the desired link for Card 3
      },
     
      {
        imageUrl: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1689663686/Dubai_Dolphinarium_Show_with_Dhow_Cruise_Dinner_and_Live_Entertainment5_1_sxqqf4.png',
        title: '',
        description: 'Miracle Garden Tickets & Transfers',
        link: '/mirical' // Add the desired link for Card 3
      },
    // Add more image card objects as needed
  ];

  return ( 
    <div className='cardh'>
      <h1 style={{paddingTop:'90px',}}>For Kids</h1> 
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

export default Kids;
