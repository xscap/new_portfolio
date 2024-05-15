
import './About.css'
import ME from '../../assets/ap.jpg'
import { FaSchool } from "react-icons/fa";

import { FaUniversity } from "react-icons/fa";


const About = () => {
  return (

    

    <section id='about'>
      
      
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
             <div className="about__cards">
              <article className='about__card'>
                  <FaUniversity className='about_icon'/>
                  <h5>College</h5>
                  <small>BPPIMT (8.59)</small>
                  
              </article>

              <article className='about__card'>
                  <FaSchool className='about_icon'/>
                  <h5>School</h5>
                  <small>UGHS (80%)</small>
                  
              </article>

              
             </div>

             <p>
             Step into the unknown with courage and enthusiasm. Embrace every opportunity, learn from every challenge, and build a future. Every experience is a stepping stone towards my personal and professional growth. I am curious,determined, and I believe in my potential.
             </p>

             <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>

      </div>

    </section>
  )
}

export default About