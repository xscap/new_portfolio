
import IMG1 from '../../assets/hardweb front.png'
import IMG2 from '../../assets/workout.png'
import IMG3 from '../../assets/img4.png'

import './portfolio.css'



function Portfolio() {
  return (
    <section id='portfolio'>
      <h2>My Projects</h2>
     
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="" />
          </div>
            <h3>
             Vehicle Accident Prevention System
            </h3>
          <div className="portfolio_item-cta">
            <a href="https://hardweb-theta.vercel.app/" className='btn' target = '_blank'>Live Demo</a>
            <a href="https://github.com/xscap/hardweb" className='btn btn-primary' target='_blank'>Source Code</a>
          </div>
          
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG2} alt="" />
          </div>
            <h3>
              HealthCare Analytics
            </h3>
            <div className="portfolio_item-cta">
            <a href="https://www.canva.com/design/DAF7TOXjNB4/KEwZNC_5LpzqIaIYFUQAkA/view?utm_content=DAF7TOXjNB4&utm_campaign=designshare&utm_medium=link&utm_source=editor" className='btn' target = '_blank'>Appreciation</a>
            <a href="https://github.com/xscap/MTE_proj" className='btn btn-primary' target='_blank'>Source Code</a>
          </div>
          
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG3} alt="" />
          </div>
            <h3>
              Students Marks Analysis
            </h3>
            <div className="portfolio_item-cta">
            <a href="https://github.com/xscap/DA2" className='btn' target = '_blank'>Source Code</a>
            
          </div>
          
        </article>


        
      </div>
    </section>
  )
}

export default Portfolio