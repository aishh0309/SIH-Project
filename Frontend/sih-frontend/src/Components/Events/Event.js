
import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './Events.css'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom';


function Event() {
  return (
  <>
      <Navbar/> 

<div className="Events">

         <Calendar/>
         <h1>No Upcoming Events😢!</h1>
    </div>
  </>
  
   
  )
}

export default Event