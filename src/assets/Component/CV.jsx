import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

function CV() {

  const [showForm, setShowForm] = useState(false)
  const form = useRef()

  const sendHireRequest = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      alert("Hire request sent successfully ✅")
      setShowForm(false)
    })
    .catch(() => {
      alert("Failed to send ❌")
    })
  }

  return (
    <div className="cv-container">

      {/* BUTTONS */}
      <div className="cv-buttons">
        <button className="btn-hire" onClick={() => setShowForm(true)}>
          Hire Me
        </button>

        <a href="Krushna_CV.jpeg" download>
          <button className=" my-3 btn-download">Download CV</button>
        </a>
      </div>

      {/* HIRE FORM MODAL */}
      {showForm && (
        <div className="modal">
          <form ref={form} onSubmit={sendHireRequest} className="modal-content">

            <h3>Hire Me</h3>

            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="job" placeholder="Job Details" required></textarea>

            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>Close</button>

          </form>
        </div>
      )}

    </div>
  )
}

export default CV