import React from 'react'
import "../Comonets/Button.css"
import { NavLink } from 'react-router-dom'
const Button = () => {
  return (
  <NavLink data-aos="zoom-in" to="/book"> <button className="glow-on-hover" type="button">Book Now</button></NavLink> 
  )
}

export default Button;