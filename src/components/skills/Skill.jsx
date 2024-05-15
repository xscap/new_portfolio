
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { TbBrandOffice } from "react-icons/tb";
import { IoLogoTableau } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";

import { SiPowerbi } from "react-icons/si";

import './skill.css'

function Skill() {
  return (
    <section id='skills'>
      
    <h2>My Skills</h2>

    <div className="container experience__container">

      <div className="experience__frontend">

        <h3>Frontend Development</h3>

       <div className="experience__content">
        <article className="experience__details">
          <FaHtml5 className='experience__details-icon'/>
          <h4>HTML</h4>
        </article>

        <article className="experience__details">
          <FaCss3Alt className='experience__details-icon'/>
          <h4>CSS</h4>
        </article>

        <article className="experience__details">
          <IoLogoJavascript className='experience__details-icon'/>
          <h4>JAVASCRIPT</h4>
        </article>

        <article className="experience__details">
          <FaReact className='experience__details-icon'/>
          <h4>REACT</h4>
        </article>

        <article className="experience__details">
          <RiTailwindCssFill className='experience__details-icon'/>
          <h4>TAILWIND CSS</h4>
        </article>

        <article className="experience__details">
          < SiShadcnui className='experience__details-icon'/>
          <h4>UI LIBRARIES</h4>
        </article>
       </div>
      </div>

      <div className="experience__dataanalysis">

      <h3>Data Analysis</h3>

<div className="experience__content">
 <article className="experience__details">
   <SiJupyter className='experience__details-icon'/>
   <h4>JUPYTER NOTEBOOK</h4>
 </article>

 <article className="experience__details">
   <FaPython className='experience__details-icon'/>
   <h4>PYTHON</h4>
 </article>

 <article className="experience__details">
   <SiPowerbi className='experience__details-icon'/>
   <h4>MICROSOFT POWERBI</h4>
 </article>

 <article className="experience__details">
   <TbBrandOffice className='experience__details-icon'/>
   <h4>MS OFFICE</h4>
 </article>

 <article className="experience__details">
   <IoLogoTableau className='experience__details-icon'/>
   <h4>TABLEAU</h4>
 </article>

 <article className="experience__details">
   < GrMysql className='experience__details-icon'/>
   <h4>BASIC SQL</h4>
 </article>
 </div>
      </div>

    </div>

    </section>
  )
}

export default Skill