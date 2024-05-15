import React from 'react'
import './Navbar.css'

import { IoIosPerson } from "react-icons/io";
import { MdWbIncandescent } from "react-icons/md";
import { GiBroadsword } from "react-icons/gi";

import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { useState } from 'react';






function Navbar() {

  const [activeNav,setactiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setactiveNav('#')} className={activeNav === '#'?'active' : ''}><IoIosPerson/></a>
      <a href="#about"  onClick={()=> setactiveNav('#about')} className={activeNav === '#about'?'active' : ''}><MdWbIncandescent/></a>
      <a href="#skills" onClick={()=> setactiveNav('#skills')} className={activeNav === '#skills'?'active' : ''}><GiBroadsword/></a>
      <a href="#portfolio" onClick={()=> setactiveNav('#portfolio')} className={activeNav === '#portfolio'?'active' : ''}><CgWebsite/></a>
      <a href="#contact" onClick={()=> setactiveNav('#contact')} className={activeNav === '#contact'?'active' : ''}><MdOutlineConnectWithoutContact/></a>
    </nav>
  )
}

export default Navbar