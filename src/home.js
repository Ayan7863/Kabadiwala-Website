import React from 'react'
import {  Link } from 'react-router-dom';
import { BsArrowRight} from 'react-icons/bs';
import { FiTruck} from 'react-icons/fi';
import { FaRupeeSign} from 'react-icons/fa';
import { ImHeadphones} from 'react-icons/im';
import './home.css'

    const Home = () => {
      return (
        <>
        <div className='home'>
        <br/>
                    <br/> 
                    <br/>
                    <br/> <br/>
                    <br/>
                    <br />
          {/* <br />
          <br />
          <br /> */}
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The Scrap Rates</h2>
                <Link to='/scraprates' className='link'>View Now<BsArrowRight/></Link>
            </div>
            <div className='img_box'>
                <img src="home scrap item 2.png" alt='Scrap'></img>
            </div>
        </div>
    </div>
    {/* <div className='product_type'> 
      <div className='container'>
        <div className='box'>
          <div className='img_box'>
            <img src="paperscrap .jpg" alt='Paper Scrap'width="650"
              height="500"></img>
          </div>
          <div className='deatail'>
            <p>Rate.....</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src="matelscrap.jpg" alt='Metal Scrap'width="650"
              height="500"></img>
          </div>
          <div className='deatail'>
            <p>Rate.....</p>
          </div>
        </div>
      </div>
    </div> */}
    <div className='pickimg'>
      <img src='Screenshot 2023-09-16 193105.png' alt="SELL YOUR SCRAP"/>

    </div>
    <div className='whyimg'>
      <h1>Why Choose Digital Kabadi Wala?</h1>
      <img src='why.png' alt="SELL YOUR SCRAP" width="1500"/>
    </div>
    <div className='about'>
      <div className='container'>
        <div className='box'>
          <div className='icon'>
            <FiTruck/>
          </div>
          <div className='detail'>
            <h3>Free Shipping</h3>
            <p>Sale Price Is More Than <FaRupeeSign/>500</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <FaRupeeSign/>
          </div>
          <div className='detail'>
            <h3>Feel Free To Price</h3>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <ImHeadphones/>
          </div>
          <div className='detail'>
            <h3>Customer Support </h3>
            <p>Every Time call Support</p>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
    </>
  );
}

export default Home;