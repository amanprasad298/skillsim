import React from 'react'
import './Card.css'
import card from '../Assets/card_second.svg'

const Card = () => {

    // const width ={
    //     width: '18rem'
    // }

  return (
    <div className='container'>
      <div className='heading-card'>
        <h2>During our transformational 2-day weekend experiences, you’ll get to</h2>
      </div>
      <div class="row card-wrap" >
        <div className="col-lg-3 col-md-6 col-sm-12 mb-md-4 small-phone">
            <div class="card small-card">
            <img src={card} class="card-img" alt="..."/>
            <div class="card-body">
                <h2 class="card-title small-title">Art of Problem-Solving</h2>
                <p class="card-text small-text">Take on challenges in a realistic workplace setting to problem solve like a pro. Our cutting-edge simulations mirror and give you hand-on experience of real on-the-job scenarios.</p>
            </div>
            </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mb-md-4 small-phone ">
            <div class="card small-card">
            <img src={card} class="card-img" alt="..."/>
            <div class="card-body">
                <h2 class="card-title small-title">Exclusive Mentoring & Insider</h2>
                <p class="card-text small-text">Receive personal mentoring and career guidance from industry professionals at the top of their game. Learn trade secrets that give you a leg up.</p>
            </div>
            </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 small-phone">
            <div class="card small-card">
            <img src={card} class="card-img" alt="..."/>
            <div class="card-body">
                <h2 class="card-title small-title">Impressive Portfolios</h2>
                <p class="card-text small-text">Get tips on building connections and a personal brand that open doors through networking and use of social media platforms. Make lifelong friends with peers chasing similar dreams.</p>
            </div>
            </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12 mb-md-4 small-phone">
            <div class="card small-card">
            <img src={card} class="card-img" alt="..."/>
            <div class="card-body">
                <h2 class="card-title small-title">Craft Your Personal Brand</h2>
                <p class="card-text small-text">Come away with amazing updated and relevant portfolio pieces, work samples, and achievements to highlight on your college and job applications.</p>
            </div>
            </div>
        </div>
        
      </div>
        
    </div>
  )
}

export default Card
