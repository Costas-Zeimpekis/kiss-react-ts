import React from 'react';
import './Footer.scss';

const footer: React.FC = () => (
  <footer>
    <div className="container">
      <hr />
      <div className="footer-menu">Copyright Creative Workers</div>
      <div className="footer-menu">
        <ul>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Cookies</li>
          <li>More</li>
        </ul>
      </div>
      <div className="footer-menu">Kissbutton &#9400; 2019</div>
    </div>
  </footer>
);

export default footer;
