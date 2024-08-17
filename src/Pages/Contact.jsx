import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Contact.css';

function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
 
    setMessageSent(true);

 
    e.target.reset();
  };

  return (
    <div>
      <Navbar />
      <div className='contact-page'>
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p><i className="fas fa-map-marker-alt"></i> Goa, India</p>
            <p><i className="fas fa-envelope"></i> Skillboost@gmail.com</p>
            <p><i className="fas fa-phone-alt"></i> +3336 1589 2105</p>
          </div>
          <div className="contact-form">
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Type your message here..." required></textarea>
              <button type="submit">Send</button>
            </form>
            {messageSent && (
              <p className="success-message">Message sent successfully!</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
