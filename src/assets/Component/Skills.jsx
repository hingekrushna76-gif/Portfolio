import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Skills() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_2hb06ar',      // from EmailJS
      'template_dmyeqlj',     // from EmailJS
      form.current,
      'bgJATk54S5ZL8X3Cn'       // from EmailJS
    )
    .then(() => {
      alert("Feedback sent successfully ✅")
    })
    .catch(() => {
      alert("Failed to send ❌")
    })
  }

  return (
    <div className="skills-container">

      {/* SKILLS BOX */}
      <div className="skills-box">
        <h2>My Skills</h2>

        <div className="skill">
          <span>HTML</span>
          <div className="bar"><div className="fill html"></div></div>
        </div>

        <div className="skill">
          <span>CSS</span>
          <div className="bar"><div className="fill css"></div></div>
        </div>

        <div className="skill">
          <span>JavaScript</span>
          <div className="bar"><div className="fill js"></div></div>
        </div>

        <div className="skill">
          <span>React</span>
          <div className="bar"><div className="fill react"></div></div>
        </div>

        <div className="skill">
          <span>Bootstrap</span>
          <div className="bar"><div className="fill bootstrap"></div></div>
        </div>

        <div className="skill">
          <span>Communication</span>
          <div className="bar"><div className="fill comm"></div></div>
        </div>
      </div>

      {/* FEEDBACK BOX */}
      <form ref={form} onSubmit={sendEmail} className="feedback-box">
        <h2>Feedback</h2>

        <label>Rate my skills</label>
        <input type="range" name="rating" min="1" max="5" />

        <textarea 
          name="message" 
          placeholder="Write your comment" 
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default Skills