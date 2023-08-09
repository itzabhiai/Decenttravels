import Loder from "../Comonets/Loder";
import "../Style/home.css"


import React, { useState, useEffect } from 'react';
import PopPlace from "./PopPlace";
import Faq from "./Faq";
import Costomer from "../Comonets/Costomer";
import Rev from "../Comonets/Rev";
import Crousel from "../Comonets/Crousel";
// import Button from "../Comonets/Button";
import AOS from 'aos'
import 'aos/dist/aos.css'
import CardVertical from "../Comonets/CardVertical";
import Card2 from "../Comonets/Card2";
import Carousel2 from "./Carousel2";

import ExByTheme from "./ExByTheme";



const Home = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  },[])
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
    <div className='MainH'>
      <div><Carousel2/></div>

    {/* <div className='Hero'>
      <h1 data-aos="fade-up"> Raj Tours</h1>
      <p data-aos="zoom-in">Unveiling the magic of Dubai: Your unforgettable journey starts here!</p>
      < Button/>

    </div> */}
    
    <div>
     
    </div>
        <div className="Homecard">
        <h1  data-aos="zoom-in" >Raj Tours:<br/> Unforgettable Experiences Await You!</h1>
        <p data-aos="zoom-in" >
"Raj Tours: Unveiling Dubai's allure through bespoke journeys. Discover iconic landmarks, desert adventures, and cultural treasures. Let us create unforgettable memories on your extraordinary voyage to Dubai."</p>
        <h1  data-aos="zoom-in" >Dubai Tour Packages</h1>
            <p data-aos="zoom-in" >Explore the wonders of Dubai with our diverse tour packages, offering desert safaris, iconic landmarks, cultural experiences, and vibrant nightlife. Unforgettable adventures await!</p>
            <h1 data-aos="zoom-in" >Book Your Adventure Now!</h1>
            <p data-aos="zoom-in" >Secure your spot and embark on an unforgettable adventure with our easy booking process. Explore our diverse range of tours and experiences and create memories that will last a lifetime. Don't miss out, book now!</p>
            <br/>
            <CardVertical/>
    <Card2/>
          <ExByTheme/>
          <table className="tablee" >
  <thead>
    <tr>
      <th colSpan={4}>Tours Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td colSpan={2}>The Place</td>
      <td colSpan={2}>Dubai</td>
    </tr>
    <tr>
      <td>2</td>
      <td colSpan={2}>Time</td>
      <td colSpan={2}>5 Night 6 Days</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Ticket</td>
      <td>Flight ticket</td>
    </tr>
    <tr>
      <td>4</td>
      <td colSpan={2}>To Stay</td>
      <td>4 Hotel</td>
    </tr>
  </tbody>
</table>


    </div>
    <div>
    <PopPlace/>
    <Faq/>
    <Costomer/>
    <Rev/>
    <Crousel/>
    </div>
    </div>

)}
    </div>
  )
}

export default Home