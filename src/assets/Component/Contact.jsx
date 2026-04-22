import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_2hb06ar',
            'template_dmyeqlj',
            form.current,
            'bgJATk54S5ZL8X3Cn'
        )
            .then(() => {
                alert("Message sent successfully ✅")
            })
            .catch(() => {
                alert("Failed to send ❌")
            })
    }

    return (
        <div>
            <div className="container-fluid row contactWrapper">

                {/* FORM */}
                <div className="col-lg-5 col-md-6 col-12">
                    <div className="form-container">
                        <form ref={form} onSubmit={sendEmail} className="contact-form">

                            <h2>Contact Me</h2>

                            <div className="input-box">
                                <input type="text" name="name" required />
                                <label>Name</label>
                            </div>

                            <div className="input-box">
                                <input type="email" name="email" required />
                                <label>Email</label>
                            </div>

                            <div className="input-box">
                                <input type="tel" name="mobile" required />
                                <label>Mobile Number</label>
                            </div>

                            <div className="input-box">
                                <textarea name="message" required rows="3"></textarea>
                                <label>Message</label>
                            </div>

                            <div className="btn-group">
                                <button type="submit" className="submit-btn">Submit</button>
                                <button type="reset" className="reset-btn">Reset</button>
                            </div>

                        </form>
                    </div>
                </div>

                {/* CONTACT INFO */}
                <div className="col-lg-5 col-md-6 col-12">
                    <div className="contact-box text-white">
                        <h1 className="title">Touch With Me :-</h1>
                        <h3>📞 Contact Number : 883003945</h3>
                        <h3>📧 Email : example@example.com</h3>

                        <div className='iconsmedia bg-white rounded-pill px-3 py-2'>
                            <span><img src="github icon.svg" alt="" /></span>
                            <span><img src="linkdin icon.webp" alt="" /></span>
                            <span><img src="Instagram_icon.png" alt="" /></span>
                            <span><img src="Facebook_logo.png" alt="" /></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact