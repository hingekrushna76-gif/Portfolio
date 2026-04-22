import React from 'react'
import CV from './CV'

function Home() {
    return (
        <div>
            <div className="container-fluid row">
                <div className="col-lg-1"></div>
                <div className="col-lg-5 my-auto HomeMain">
                    <h2 className="intro">Hi, I am</h2>
                    <h1 className='display-4 mainname'>Krushna Hinge</h1>
                    <h4 className='maininfo'>Learner at The Baap Company | UI Designer</h4>
                    <div className='iconsmedia'>
                        <span><a href="https://github.com/hingekrushna76-gif"><img src="github icon.svg" height={40} alt="" /></a></span>
                        <span><a href="https://in.linkedin.com/?mcid=6844056167778418689&src=go-pa&trk=sem-ga_campid.14650114788_asid.151761418467_crid.657403558730_kw.purpose%20of%20linkedin_d.c_tid.kwd-932179667451_n.g_mt.e_geo.9040235&cid=&gclsrc=aw.ds&gad_source=1&gad_campaignid=14650114788&gbraid=0AAAAABKX7wGVm5qVjWkLnDfcxCTuguKwb&gclid=CjwKCAjwwJzPBhBREiwAJfHRnegif6vjZIhqZ9xVRC0y0MtaENSa_nt_gOp9A8oICgCBeM0-aU_eABoC90EQAvD_BwE"><img src="linkdin icon.webp" height={40} alt="" /></a></span>
                        <span><a href="https://www.instagram.com/krushna_hinge_905/"><img src="Instagram_icon.png" height={40} alt="" /></a></span>
                        <span><a href="http://facebook.com/profile.php?id=100074775613736"><img src="Facebook_logo.png" height={40} alt="" /></a></span>
                    </div>
                    <CV />
                </div>
                <div className="col-lg-6">
                    <div className='img'>
                        <img src='MyphotoFront.png' className='hoverimg' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
