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
  const [dark, setDark] = useState(true);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDark(saved === "dark");
  }, []);

  // Apply theme globally
  useEffect(() => {
    document.body.className = dark ? "darkTheme" : "lightTheme";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
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
            <NavBar dark={dark} setDark={setDark} />
      </BrowserRouter>
    </div>
  )
}

export default App
