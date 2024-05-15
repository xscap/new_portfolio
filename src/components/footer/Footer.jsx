
import './footer.css'

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";





function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Arnab Paul</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100049732306068"><FaFacebookSquare/></a>
        <a href="https://www.instagram.com/arnab._paul/"><FaInstagram/></a>
        <a href="https://www.linkedin.com/in/arnab-paul-09507022b/"><FaLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Arnab Paul, All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer