import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h1>Hi I'm William. Glad to see you.</h1>
        <h5 className="text-light">A skilled Computer Science student at Multimedia Nusantara University with a great passion for learning.
                <p>Interested in the fields of Front End, Cybersecurity, and Mobile App.</p></h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
