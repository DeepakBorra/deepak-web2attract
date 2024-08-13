
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div  className="footer-section">
        <div>
        <p>Over the years, working with Nature has helped us realise 'less is more and usually more effective'. We intend to continue working hard to make simple systems more sophisticated.</p>
      </div>
      <div className='footer-content'>
        <h4>PROJECTS</h4>
        <p>Jajam</p>
      </div>
      <div>
        <h4>PLATFORM</h4>
        <p>Workshops</p>
        <p>Collections</p>
        <p>Notes</p>
      </div>

        </div>
      <div className="footer-bottom">
        <p>Instagram</p>
        <p>Contact Us</p>
        <p>Terms</p>
        <p>Privacy Policy</p>
        <p>Return Policy</p>
      </div>
    </footer>
  );
}

export default Footer;
