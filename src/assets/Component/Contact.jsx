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
                            <span><a href="https://github.com/hingekrushna76-gif"><img src="github icon.svg" alt="" /></a></span>
                            <span><a href="https://in.linkedin.com/?mcid=6844056167778418689&src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418467_crid.657403558730_kw.purpose%20of%20linkedin_d.c_tid.kwd-932179667451_n.g_mt.e_geo.9040235&cid=&gclsrc=aw.ds&gad_source=1&gad_campaignid=14650114788&gbraid=0AAAAABKX7wGVm5qVjWkLnDfcxCTuguKwb&gclid=CjwKCAjwwJzPBhBREiwAJfHRnegif6vjZIhqZ9xVRC0y0MtaENSa_nt_gOp9A8oICgCBeM0-aU_eABoC90EQAvD_BwE"><img src="linkdin icon.webp" height={40} alt="" /></a></span>
                            <span><a href="https://www.instagram.com/krushna_hinge_905/"><img src="Instagram_icon.png" height={40} alt="" /></a></span>
                            <span><a href="http://facebook.com/profile.php?id=100074775613736"><img src="Facebook_logo.png" height={40} alt="" /></a></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact