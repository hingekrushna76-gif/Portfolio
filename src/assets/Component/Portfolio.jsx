import React from 'react'
import { useNavigate } from 'react-router-dom'

function Portfolio() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="hero">

        {/* LEFT IMAGE */}
        <div className="hero-left">
          <img src="myphoto-removebg-preview.png" height={525} alt="profile" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-right">

          <div className="hero-content">
            <h1>
              My <span className="line"></span><br />
              Portfolio
            </h1>

            <p>
              I am a frontend developer skilled in React, JavaScript, HTML, and CSS.
              I build modern and responsive web applications.
            </p>

            <div className="buttons">
              <button className="btn-primary" onClick={() => navigate('/skills')}>Explore Now</button>
              <button className="btn-secondary" onClick={() => navigate('/aboutMe')}>▶ My Info</button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Portfolio
