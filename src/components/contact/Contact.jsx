import React,{useRef} from 'react'
import emailjs from 'emailjs-com'
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import './contact.css'

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_woovztw', 'template_01igqhh', form.current, {
        publicKey: 'WHoNI1r7khYYc7lb4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>arnab2181@gmail.com</h5>
            <a href="mailto:arnab2181@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 7044495862</h5>
            <a href="https://wa.link/oxv7js" target='_blank'>Send a Message</a>
          </article>

          <article className="contact__option">
           
            <FaInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>arnab._paul</h5>
            <a href="https://www.instagram.com/direct/t/17842294538318681/" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder = 'Enter Your Name' required />
          <input type="email" name='email' placeholder = 'Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message Here' required></textarea>
          <button type="submit" href = "mailto:arnab2181@gmail.com" className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact