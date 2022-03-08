import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';



function Footer() {
  return (
    <div className="footer">
        <div className="footer_left">
        copyright 2022 &copy;

        </div>

        <div className="footer_right">
        <InstagramIcon/>   
        <TwitterIcon/> 
        <FacebookIcon/> 
            
        </div>  
    </div>


  )
}

export default Footer