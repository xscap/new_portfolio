import React from 'react'
import './header.css'
import CV from '../../assets/Tech_Engineer_Resume_Template.pdf'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
         <h5>
          Hello I am
         </h5>

         <h1>Arnab Paul</h1>
         

         <h5 className="text-light">Frontend Developer</h5>

         <div className="cta">
          <a href={CV} download className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Lets Connect</a>
         </div>

         
         

         
      </div>
    </header>
  )
}

export default Header