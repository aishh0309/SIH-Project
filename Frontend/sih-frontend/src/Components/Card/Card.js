import React from 'react'
import './Card.css'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GChat from '../img/gchat.png'
import Members from '../img/members.png'
import { Link } from 'react-router-dom';

function Card() {
  return (
   
    <div className="cards">

    
  <Link to="/events">
  <div className="product">
      {/* <CalendarMonthIcon fontSize="large"/> */}
      <h4>Upcoming Events <CalendarMonthIcon fontSize="large"/></h4>
      <img src="https://media.istockphoto.com/photos/chalkboard-and-colored-balloons-on-a-wooden-background-picture-id1263908025?b=1&k=20&m=1263908025&s=170667a&w=0&h=DDeDvtWSu99Z5yKrbx0X3M26uHGP1SCBV_-zXKS-FSQ="/>

  </div></Link>
  
 <Link to="/chat">
 <div className="product">
      <h4> Group chat </h4>
      <img src={GChat}  id="gchat"  />
  </div>
 </Link>
 
 
  
  
</div>

  )
}

export default Card