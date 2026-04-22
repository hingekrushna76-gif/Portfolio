import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Aboutme() {
   const form = useRef()

  const sendReview = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_2hb06ar',
      'template_dmyeqlj',
      form.current,
      'bgJATk54S5ZL8X3Cn'
    )
    .then(() => {
      alert("Review sent successfully ✅")
    })
    .catch(() => {
      alert("Failed to send ❌")
    })
  }
  return (
    <div>
      <div className="about-container">

        <div className="about-card">
          <h1 className="about-title">About Me</h1>

          <p className="about-text">
            I am a trainee at The Baap Company. I completed my 12th from Pune University with 67%.
          </p>

          <p className="about-text">
            I am from Majalgaon, in Beed district, and I belong to a farmer background.
          </p>

          <p className="about-text">
            Currently, I am learning HTML, CSS, Bootstrap, React, and JavaScript.
            I am capable of working in frontend development, with strong skills in React and JavaScript.
          </p>

          <p className="about-text vision">
            My vision is to learn technology and build solutions for farming and farmer-focused businesses.
          </p>

          <p className="about-text">
            Currently, I am working on a website related to farming that helps farmers in multiple ways.
          </p>

          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>React</span>
            <span>JavaScript</span>
          </div>
          <div className="review-box">
            <form ref={form} onSubmit={sendReview} className="review-box">
            <h3>Share Your Feedback</h3>

            <textarea
              placeholder="Write your review or suggestion about my vision..."
            ></textarea>

            <button>Submit</button>
            </form>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Aboutme
