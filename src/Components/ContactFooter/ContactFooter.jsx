import React from 'react'
import './ContactFooter.css'
import { Link } from 'react-router-dom'

const ContactFooter = () => {
  return (
    <div className='sub-footer-wrap'>
      <div className="container">
        <div className="row align-items-center">
            <div className="col-md-8 text-part">
                <h1>If you have any queries, feel free to contact us</h1>
                <p>Click on the button to fill in the contact us form</p>
            </div>
            <div className="col-md-4 button-contact text-md-end">
                <Link to='/contact'><button>Contact us</button></Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactFooter
