import React from 'react'
import './Cards.scss'
import { Link } from 'react-router-dom'
const Cards = ({item}) => {
  return (
    <div className="myCards">
        <img  src={item.image} alt="" />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <span>{item.price}</span>
        <Link to={`/detail/${item._id}`}><button className='btn btn-primary'>Go to Details</button></Link>
    </div>
  )
}

export default Cards