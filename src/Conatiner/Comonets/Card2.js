import React from 'react'
import "../Comonets/CardVertical.css"
import { NavLink } from 'react-router-dom';

import { BsFillStopwatchFill } from "react-icons/bs";
import ScrollToTop from './ScrollToTop';
const Card2 = () => {
    const cards = [
        { id: 1, title: 'Mussandam Dibba Tour', content: '1 Day', image: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1688922808/Mussandam_Dibba_Tour_udhzzn.png',to:"/mussandam" },
        { id: 2, title: 'IMG World of Adventure with Free Transfers', content: '8 Hours', image: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1688922808/42_jwcctn.jpg',to:"/image-world" },
        { id: 3, title: 'Atlantis Aqua Venture Water Park Tour Package', content: '8 Hours', image: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1688922808/Mussandam_Dibba_Tour_1_agqgwd.png',to:"/atlantic-park" },
        { id: 4, title: 'Tickets & Tour of Ferrari World, Abu Dhabi', content: '12 Hours', image: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1688926067/Tickets_Tour_of_Ferrari_World_Abu_Dhabi_rqqbwg.png',to:"/ferrari-ride" },
        // { id: 5, title: 'Card 5', content: 'This is the content of Card 5', image: 'image5.jpg' },
      ];
  return (
    <div className='Maincard'>
      <ScrollToTop/>
    <h1>ADVENTURE TOURS <hr/></h1>
    <hr/>
    <br/>
  <div className="card-section">
    
<div className="card-container">
  {cards.map((card) => (
    <NavLink key={card.id} to={card.to} className="card11" activeClassName="active">
      <img src={card.image} alt={card.title} />
      <h3>{card.title}</h3>
      <p> <BsFillStopwatchFill/> {card.content}</p>
    </NavLink>
  ))}
</div>
</div>
</div>
  )
}

export default Card2