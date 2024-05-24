import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footerTop">
          <div className="footDiva">
            <div className="footDiv1">
              <h3>About Us</h3>
              <p style={{color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates sed dolorum excepturi iure eaque, aut unde.</p>
            </div>
            <div className="footDiv2">
              <h3>Subscribe</h3>
              <div><input type="text" placeholder='Email' /><button className='btn btn-primary'>SEND</button></div>
            </div>
          </div>
          <div className="footDivb">
            <h3>Quick Links</h3>
            <div>
            <ul>
              <li style={{color:"gray"}}>Sell Online</li>
              <li style={{color:"gray"}}>Features</li>
              <li style={{color:"gray"}}>Shopping cart</li>
              <li style={{color:"gray"}}>Store builder</li>
            </ul>
            <ul>
              <li style={{color:"gray"}}>Mobile commerce</li>
              <li style={{color:"gray"}}>Dropshipping</li>
              <li style={{color:"gray"}}>Website development</li>
            </ul>
            <ul>
              <li style={{color:"gray"}}>Point of sale</li>
              <li style={{color:"gray"}}>Hardware</li>
              <li style={{color:"gray"}}>Software</li>
            </ul>
            </div>
          </div>
          <div className="footDivc">
            <h3>Contact Info</h3>
            <p><i class="fa-solid fa-location-dot"></i> 203 Fake St. Mountain View, San Francisco, California, USA</p>
            <p><i class="fa-solid fa-phone"></i> +2 392 3929 210</p>
            <p><i class="fa-solid fa-envelope"></i> emailaddress@domain.com  </p>
          </div>
        </div>
        <div className="footerBottom">
          <p style={{color:"gray"}}>Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer