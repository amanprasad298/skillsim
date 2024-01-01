import React from 'react'
import './ItemHome.css'
import { Link } from 'react-router-dom'

const ItemHome = (props) => {
  return (
    
    <div className='item-home-wrap text-center'>
      <div className="card card-home-wrap">
        <Link to="/dynamic-programs"><img src={props.image} alt="" /></Link>
        <div className="card-body ">
            <h2>{props.name}</h2>
            <div className="d-flex justify-content-center small1">
                <p>{props.date}</p>
                <p className='px-2'>|</p>
                <p>{props.location}</p>
            </div>
            <h3>{props.desc}</h3>
            <div className="d-flex justify-content-center align-items-center small2 mt-4">
                <h1>₹{props.price}</h1>
                <Link to='/dynamic-programs'><button className='rounded-3'>Book Now</button></Link>
            </div>
        </div>
      </div>
      </div>
  )
}

export default ItemHome
