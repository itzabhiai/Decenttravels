
import { NavLink } from "react-router-dom";

import "../Comonets/Footer.css"
import { BiHome ,BiPhoneCall,BiEnvelope } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';


const Footer = () => {

  return (
    <div className='mainfooter' >
      <div className='textsec'>
        <div>
        <NavLink to= "/">   <img src='https://res.cloudinary.com/dlbp05ldk/image/upload/v1688283335/Red_and_Blue_Simple_Travel_Logo_wgafgr.png' alt='logo'/></NavLink> 
        </div>
        <div>
        <h5>
        Unveiling the magic of Dubai: Your unforgettable journey starts here!
        </h5>
        </div>
      </div>
      <hr/>
      <div className='textsec'>
        <h3><b>USEFULL LINKS</b></h3>
        <div >
        <NavLink  to="/">
          <h4 className='tom'>Home</h4>
        </NavLink>
        <NavLink  to="/about">
          <h4 className='tom'>About</h4>
        </NavLink>
        <NavLink  to="/faq">
          <h4 className='tom'>FAQs</h4>
        </NavLink>
        <NavLink  to="/privecy">
          <h4 className='tom'>Privacy & Policy</h4>
        </NavLink>
        <NavLink  to="/book">
          <h4 className='tom'>Book Now</h4>
        </NavLink>
        <NavLink  to="/guid">
          <h4 className='tom'>Guidline</h4>
        </NavLink>
        <NavLink  to="/contect-us">
          <h4 className='tom'>Contact Us</h4>
        </NavLink>
     
        
       
        </div>

      </div>
      <hr/><div className='textsec' style={{textAlign:"justify"}}>
      <h3><b>CONTACT US</b></h3>
      <div className='cont'>
      <p1><BiHome/> HEAD OFFICE : A/4 SHANTIPARK SOCIETY, NEAR
AMITNAGAR, VIP ROAD, KARELIBAGH, VADODARA  </p1> <br/>
<p1><BiHome/> <p1> BRANCH OFFICE : G-401 S6 BUSINESS HUB, NEAR
BHAGWAT VIDYAPEETH, SG HIGHWAY, AHMEDABAD </p1> </p1> <br/>
      <p1><BiPhoneCall/> +91 88664 88874</p1><br/>
      <p1><BiEnvelope/>rajinternational.raj@gmail.com</p1>
      </div>
        
        </div>
        <br/>
        
        <div className="a4a"><hr/> Copyright © 2023 Raj Tours All Rights Reserved.
        
        <br/>  website designed By  <a href="https://instagram.com/itz.kishor?igshid=MzNlNGNkZWQ4Mg=="> <AiOutlineInstagram/> Itz.kishor </a> <br/>
                          <a href="https://theaverage.in/?fbclid=PAAab71eTR-L7N76_Xxr_LKzxPutYIlJ0m3O9-h6w3xv-c65GtR6jtnOrZ6iQ"> TheAverage.in</a>
        </div>
     </div>
  )
}

export default Footer