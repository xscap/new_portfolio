import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://" target='_blank'><FaLinkedinIn/></a>
        <a href="http://" target='_blank'><FaInstagram/></a>
        <a href="http://" target='_blank'><FaWhatsapp/></a>
    </div>
  )
}

export default HeaderSocials