import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
   <nav>
    <div className="container">
      <Link style={{fontWeight:"bold",fontSize:"22px"}} to={'/'}>DEALERS</Link>
      <ul>
        <li><Link to={'/basket'}>Basket</Link></li>
        <li><Link to={'/wishlist'}>Wishlist</Link></li>
        <li><Link to={'/admin'}>Admin</Link></li>
      </ul>
      <div className="navIcons">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-basket-shopping"></i>
      </div>
    </div>
   </nav>
  )
}

export default Header