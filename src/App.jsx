import React from 'react'
import Main from './assets/Component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './assets/Component/NavBar'
import Home from './assets/Component/Home'
import Portfolio from './assets/Component/Portfolio'
import Skills from './assets/Component/Skills'
import Aboutme from './assets/Component/Aboutme'
import Contact from './assets/Component/Contact'
import ChatBot from './assets/Component/ChatBot'
import Project from './assets/Component/Project'

function App() {
  return (
    <div className='Main'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutMe' element={<Aboutme/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
      <ChatBot/>
      </BrowserRouter>
    </div>
  )
}

export default App
