import React from 'react'
import './Sponsor.css'
import google from '../Assets/ImgCompany.png'
import microsoft from '../Assets/ImgCompany-1.png'
import airbnb from '../Assets/ImgCompany-2.png'
import axure from '../Assets/ImgCompany-3.png'
import apple from '../Assets/ImgCompany-4.png'
import facebook from '../Assets/ImgCompany-5.png'
import nokia from '../Assets/ImgCompany-6.png'
import oracle from '../Assets/ImgCompany-7.png'

const Sponsor = () => {
  return (
    <div className='container'>
        <div className='d-flex justify-content-center mb-5 sponsor-text'>
            <h1>Our <span>Sponsors</span></h1>
        </div>
        <div class="d-flex justify-content-evenly align-items-center">
            <img className="sponsor-img" src={google} alt="google" />
            <img className="sponsor-img" src={microsoft} alt="microsoft" />
            <img className="sponsor-img" src={airbnb} alt="airbnb" />
            <img className="sponsor-img" src={axure} alt="axure" />
        </div>
        <div class="d-flex justify-content-evenly align-items-center">
            <img className="sponsor-img" src={apple} alt="apple" />
            <img className="sponsor-img" src={facebook} alt="facebook" />
            <img className="sponsor-img" src={nokia} alt="nokia" />
            <img className="sponsor-img" src={oracle} alt="oracle" />
        </div>
    </div>
  )
}

export default Sponsor
