
import './index.css'

import Nav from './components/nav/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skill'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import React from 'react'
import Header from './components/header/Header'

const App = ()=>{
  return(

    <>
        <Header/>
       <Nav/>
       <About/>
       <Skills/>
       
       <Portfolio/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default App