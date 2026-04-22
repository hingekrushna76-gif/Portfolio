import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="container-fluid row navMain position-relative">

      {/* LOGO */}
      <div className="col-6">
        <Link to="/">
          <img src="kh_logo_2-removebg-preview.png" className='logo' height={130} alt="" />
        </Link>
      </div>

      {/* MENU ICON */}
      <div className="menuToggle" onClick={() => setOpen(true)}>
        ☰
      </div>

      {/* OVERLAY */}
      {open && <div className="navOverlay" onClick={() => setOpen(false)}></div>}

      {/* SIDEBAR */}
      <div className={`navSidebar ${open ? "open" : ""}`}>
        <button onClick={() => setOpen(false)} style={{alignSelf:"flex-end"}}>✖</button>

        <Link to="/" onClick={() => setOpen(false)}>
          <button className="navi">Home</button>
        </Link>

        <Link to="/aboutMe" onClick={() => setOpen(false)}>
          <button className="navi">About Me</button>
        </Link>

        <Link to="/skills" onClick={() => setOpen(false)}>
          <button className="navi">Skills</button>
        </Link>

        <Link to="/portfolio" onClick={() => setOpen(false)}>
          <button className="navi">Portfolio</button>
        </Link>

        <Link to="/contact" onClick={() => setOpen(false)}>
          <button className="rounded-pill p-2 px-3">Contact Me</button>
        </Link>
      </div>

      {/* DESKTOP NAV */}
      <div className="col-6 navLinksWrapper">
        <div className='d-flex justify-content-evenly'>
          <Link to="/"><button className='navi'>Home</button></Link>
          <Link to="/aboutMe"><button className='navi'>About Me</button></Link>
          <Link to="/skills"><button className='navi'>Skills</button></Link>
          <Link to="/portfolio"><button className='navi'>Portfolio</button></Link>
          <Link to="/contact"><button className='rounded-pill p-2 px-3'>Contact Me</button></Link>
        </div>
      </div>

    </div>
  )
}

export default NavBar