import React, { } from 'react';
import { NavLink } from 'react-router-dom';
import "../Comonets/CardVertical.css"
import { BsFillStopwatchFill } from "react-icons/bs";

const CardVertical = () => {
    const cards = [
        { id: 1, title: 'Dubai City Tour', content: ' 5 Hours', image: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1688706601/Untitled_design_3_jvffbm.png',to:"/dubai-city" },
        { id: 2, title: 'Abu Dhabi City Tour with Warner Bros', content: '5 Hours', image: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1688922810/barner_bros_248_170_px_v8tqbj.png' ,to:'/burner-bro'},
        { id: 3, title: 'Half-Day Old and New Dubai Tour plus ticket entry to Dubai Frame', content: '6 Hours', image: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1688923069/Mussandam_Dibba_Tour_2_z8r048.png' ,to:'/dubai-frame'},
        { id: 4, title: 'Limousine Tour Dubai', content: '1 Hours', image: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1688923316/Mussandam_Dibba_Tour_3_iefhre.png',to:"/limousine" },
        { id: 5, title: 'Abu Dhabi City Tour', content: '8 Hours', image: 'https://res.cloudinary.com/dlbp05ldk/image/upload/v1688926455/Tickets_Tour_of_Ferrari_World_Abu_Dhabi_1_wkacd6.png',to:"/abudhabi-city" },
      ];
    
      return (
        <div className='Maincard'>
          <h1>CITY TOURS <hr/></h1>
          <hr/>
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
      );
    };

export default CardVertical