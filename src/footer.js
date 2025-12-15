import React from 'react'
import './footer1.css'
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoYoutube } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo1'>
                    <img src='Wardiere_Inc.__10_-removebg-preview.png' alt='logo' width={250} height={250}></img>
                </div>
                <div className='detail'>
                    <p>Digital KAbadi Wala local scrap buyer in Vadodara. We collect all kind of Pasti & metals scrap (Bhangar) like Old News paper, magazine, schoolbooks, waste Iron scrap, aluminum and etc. from both commercial and residential public with market price.</p>
                    <div className='icon'>
                        <li><RiFacebookFill/></li>
                        <li><AiOutlineInstagram/></li>
                        <li><AiOutlineTwitter/></li>
                        <li><BiLogoYoutube/></li>
                    </div>
                </div>
            </div>
            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li><a href='pickup'>Pickup Request</a></li>
                    <li>Any Query</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/scraprates'>Scraprates</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/ContactUs'>Contact</a></li>
                    <li><a href='/'>Terms & Condition</a></li>
                    
               
                
                    <Link to="/Admin" className='admin'>Admin</Link>
                  
                  </ul>
            </div>
           
        </div>
       
    </div>
    </>
  );
}

export default Footer;