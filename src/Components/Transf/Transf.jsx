import React from 'react'
import './Transf.css'
import one from '../Assets/Rectangle 5card.png'
import two from '../Assets/Rectangle 5card-1.png'
import three from '../Assets/Rectangle 5card-2.png'
import four from '../Assets/Rectangle 5card-3.png'
import five from '../Assets/Rectangle 5card-4.png'
import six from '../Assets/Rectangle 5card-5.png'

const Transf = () => {
  return (
    <div className='container'>
        <div className='d-flex justify-content-center align-items-center text-center text-md-center mb-md-5 trans-text flex-column'>
            <h1>Our Transformational <span>Experiences</span></h1>
            <p>During our transformational 2-day weekend experiences</p>
        </div>


        <div className="row card-wrapper d-flex justify-content-center align-items-center">

            <div className="col-lg-4 col-md-6 col-sm-12 mb-md-4 small-dev">
                <div className="card d-flex shadow-card flex-row align-items-center">
                    <img src={one} alt="" />
                    <div className="card-body texts-wrap">
                        <h2>Skills Unleashed</h2>
                        <p>Take on challenges in a realistic workplace setting to problem solve like a pro. </p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-md-4 small-dev">
                <div className="card d-flex shadow-card flex-row align-items-center">
                    <img src={two} alt="" />
                    <div className="card-body texts-wrap">
                        <h2>Exclusive Mentoring</h2>
                        <p>Receive personal mentoring and career guidance from industry professionals at the top of their game.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-md-4 small-dev">
                <div className="card d-flex shadow-card flex-row align-items-center">
                    <img src={three} alt="" />
                    <div className="card-body texts-wrap">
                        <h2>Impressive Portfolios</h2>
                        <p>Come away with amazing updated & achievements to highlight on your college and job applications.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-md-4 small-dev">
                <div className="card d-flex shadow-card flex-row align-items-center">
                    <img src={four} alt="" />
                    <div className="card-body texts-wrap">
                        <h2>Craft Your Personal Brand</h2>
                        <p>Make lifelong friends with peers chasing similar dreams.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-md-4 small-dev">
                <div className="card d-flex shadow-card flex-row align-items-center">
                    <img src={five} alt="" />
                    <div className="card-body texts-wrap">
                        <h2>Path to Excellence</h2>
                        <p>Get the inside scoop on how to gain the skills, education, and experience needed to excel in your chosen path.</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 mb-md-4 small-dev">
                <div className="card d-flex shadow-card flex-row align-items-center">
                    <img src={six} alt="" />
                    <div className="card-body texts-wrap">
                        <h2>Refine Your Career Path</h2>
                        <p>Add-on psychometric tests to completely secure your choice of career.</p>
                    </div>
                </div>
            </div>

            

        </div>



    </div>
  )
}

export default Transf
