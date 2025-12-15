
import React, { useState, useEffect } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './nav.css';
import './media.css';

const Nav = () => {
  const [userType, setUserType] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user_login'));
    if (userData && userData.length > 0) {
      setUserType(userData[0].userType);
    }

    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector('.nav ul');
    mobileMenu.classList.toggle('show-menu');
  };

  return (
    <>
      <div className={`fix ${isMobile ? 'mobile' : ''}`}>
        <div className="header">
          <div className="container">
            <div className='nav'>
              <img src='Wardiere_Inc.__9_-removebg-preview.png' alt="Logo" />
              <GiHamburgerMenu className="hamburger-icon" onClick={toggleMobileMenu} />
              <ul className={isMobile ? 'mobile-menu' : ''}>
                <li>
                  <Link to="/" className='link'>Home</Link>
                </li>
                <li>
                  <Link to="/scraprates" className='link'>Scrap Rates</Link>
                </li>
                <li>
                  <Link to="/about" className='link'>About</Link>
                </li>
                <li>
                  <Link to="/ContactUs" className='link'>Contact</Link>
                </li>
                {userType === "Admin" && (
                  <li>
                    <Link to="/Admin" className='link'>Admin</Link>
                  </li>
                )}
                <li>
                  <div className= {isMobile ? 'mobile-menu' : 'pick'}>
                    <Link to='/pickup' className='link4'>Pickup Request<BsArrowRight /></Link>
                  </div>
                  
                </li>
              </ul>
              <div className={isMobile ? 'mobile-menu' : 'img45'}>
              <img src='nav_image2-removebg-preview.png' alt="Logo" height={200} width={200}/>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
