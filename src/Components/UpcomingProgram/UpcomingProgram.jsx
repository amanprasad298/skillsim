import React from 'react'
import './UpcomingProgram.css'
import program from '../Assets/program'
import ItemHome from '../ItemHome/ItemHome'
import { Link } from 'react-router-dom'

const UpcomingProgram = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center align-items-center text-center text-md-center mb-md-5 trans-text flex-column heads-of'>
            <h1>Our Transformational <span>Experiences</span></h1>
            <p>During our transformational 2-day weekend experiences</p>
        </div>
        <div className="item-home-wrap">
                {program.map((item,i)=>{
                    return <ItemHome key={i} id={item.id} name={item.name} image={item.image} price={item.price} desc={item.desc} date={item.date} location={item.location}/>
                })}
        </div>
        <div className="d-flex align-items-center justify-content-center item-home-wrap">
          <Link to='/programs'><button className="button-view-all rounded-3">View All</button></Link>
        </div>
        
                
    </div>
  )
}

export default UpcomingProgram
