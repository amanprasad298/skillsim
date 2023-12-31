import React from 'react'
import './Video.css'
import video from '../Assets/dummy (1).mp4'

const Video = () => {
  
  return (
    <div className="container player">
      <video id="myVideo" className="w-100 rounded-5" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>

    
    </div>
  )
}

export default Video

