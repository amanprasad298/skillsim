import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Footer_Logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-wrap'>
      <div className="container">

        <div className="d-flex foot-wrap">

        <div className="d-flex flex-column row-1">
            <img src={footer_logo} alt="" />
            <p>Empowering Minds, Igniting Passions! SkillSim is an immersive event that brings together the best of education, innovation, and talent.</p>
            <div className="social_icon d-flex">
                <i class="fa-brands fa-facebook me-2"></i>
                <i class="fa-brands fa-square-instagram me-2"></i>
                <i class="fa-brands fa-twitter me-2"></i>
                <i class="fa-brands fa-linkedin me-2"></i>
            </div>
        </div>

        <div className="d-flex flex-row row-2">
            <div className="d-flex flex-column">
            <h2>Pages</h2>
            <br />
            <Link to="/"><p>Home</p></Link>
            <Link to="/about"><p>About</p></Link>
            <Link to="/contact"><p>Contact</p></Link>
            <Link to="/programs"><p>Programs</p></Link>
            <Link to="/login"><p>Signup</p></Link>
            <Link to="/login"><p>Login</p></Link>
            </div>
        
            <div className="d-flex flex-column">
            <h2>More</h2>
            <br />
            <p>Privacy</p>
            <p>Terms & Conditions</p>
            <Link to='/legal'><p>Legal</p></Link>
            <Link to='/faq'><p>FAQ</p></Link>
            <p>Help</p>
            <p>Cookies</p>
            </div>
        </div>

        <div className="d-flex flex-column row-4">
            <h2>Stay in the loop</h2>
            <br />
            <p>Join our mailing list to stay in the loop with our newest for Programme</p>
            <div className="box">
                <div className="form-box">
                    <input type="email" name="EmailId" placeholder='Enter Your Email..'/>
                    <button type='submit'>Subscribe</button>
                </div>
            </div>

        </div>




        </div>

      </div>
    </div>
  )
}

export default Footer
