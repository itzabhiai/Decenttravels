import React from 'react'
import "../Style/ContectUs.css"
import {FaStoreAlt} from "react-icons/fa"
import { BiPhoneCall,BiEnvelope } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
const ContectUs = () => {
  return (
    <div className='MainContect'> 
        <div className='herocontect'>
        <h1>Contact Us</h1>
        </div>
      
        <div className='Content'>
        <NavLink to='mailto:rajinternational.raj@gmail.com?subject=Your%20Subject&body=Your%20Message'>  <p style={{color:'hsl(0, 4%, 9%)'}}> <strong><BiEnvelope/> Email : <br/>rajinternational.raj@gmail.com</strong></p></NavLink>
          <NavLink to='tel:+91 95122 44779'> <p style={{color:'hsl(0, 4%, 9%)'}}>  <strong><BiPhoneCall/> Mobile No : +91 95122 44779</strong></p></NavLink>
          <hr/>
          <p> <strong><FaStoreAlt/> Vadodara:Head Office</strong></p>
          <p>A/4 ShantiPark society,
Near Amit nagar, VIP road,
KareliBaagh, Vadodara
</p>
<hr/>
<p> <strong><FaStoreAlt/> Mumbai </strong></p>
<p>V13 104 Vinay nagar Mira
road East
near pleasant parak
Mira road, Mumbai
</p>
<hr/>
<p> <strong><FaStoreAlt/> Surat</strong></p>
<p>Shop no:5, 1st floor,
Jaladarshan appartment,College road, Amroli,
Surat, Nr. Jivan jyot
hospital

</p>
<hr/>
<p> <strong><FaStoreAlt/> Ahmedabad</strong></p>
<p>G-301 SG business hub,
Near bhagvat
vidhyapith, SG highway,
380060, Ahmedabad
</p>
<hr/>
<p> <strong><FaStoreAlt/> Dubai </strong></p>
<p>High Light Travel and
Tourism LLC
Deira, Dubai
</p>
<hr/>
<p> <strong><FaStoreAlt/> Latur</strong></p>
<p>301, Nalanda Campus
Suthmill road
Maharashtra</p>







        </div>
    </div>
  )
}

export default ContectUs