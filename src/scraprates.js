
import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './scraprates.css';
import { FaUserAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import { FaRupeeSign } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';

const Scraprates = () => {
  const [logindata, setLoginData] = useState([]);
  const history = useNavigate();
  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem('user_login');
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLoginData(user);

      const userbirth = user.date === todayDate;

      if (userbirth) {
        setTimeout(() => {
          console.log('ok');
          handleShow();
        }, 3000);
      }
    }
  };

  useEffect(() => {
    const getuser = localStorage.getItem('user_login');
    if (!getuser) {
      history('/login');
    } else {
      const user = JSON.parse(getuser);
      setLoginData(user);
    }
  }, [history]);

  const userlogout = () => {
    localStorage.removeItem('user_login'); // Remove data from local storage
    history('/'); // Redirect to the home page or login page as needed
  };

  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelected = (itemName) => {
    if (!selectedItems.includes(itemName)) {
      setSelectedItems([...selectedItems, itemName]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== itemName));
    }
  };

  const handleContinue = () => {
    // Store the selected items in local storage
    localStorage.setItem('selectedItems', JSON.stringify(selectedItems));

    // Navigate to the Pickup Request Form page
    history('/pickup');
  };
  return (
    <>
      {logindata.length === 0 ? (
        <>
          {/* Render content for when the user is not logged in */}
         
          
          
          <NavLink to="/login">
            <div className="pls">Please SignIn</div>
          </NavLink>
        </>
      ) : (
        <>
        <div className='scrap'>
          {/* Render content for when the user is logged in */}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* <br />
          <br />
          <br /> */}
          
          <div className="Free">
            <h1>What would you like to sell ?</h1>
            <div className="right">
              <div className="user_icon">
                <FaUserAlt />
              </div>
              {logindata.name && <h3>Welcome, {logindata.name}</h3>}
              <div className="logout">
                <Button onClick={userlogout}>
                  <p>LogOut</p>
                </Button>
              </div>
            </div>
          </div>

          <br/>
        
         
          <div className='inputs'>
                      <input type="checkbox" value='paperscrap'onChange={() => handleItemSelected('Paper Scrap')}/><br/>
                      <img src='paperscrap .jpg' alt='paperscrap'width="250" height="250"/>
                      <p>News Paper</p>
                      <p><div className='icon'><FaRupeeSign/>13/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs1'>
                      <input type="checkbox" value='mixplasticscrap'onChange={() => handleItemSelected('Mix Plastic Scrap')}/><br/>
                      <img src='plasticscrap.jpg' alt='mixplasticscrap'width="250" height="250"/>
                      <p>Mix Plastic</p>
                      <p><div className='icon'><FaRupeeSign/>12/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs'>
                      <input type="checkbox" value='metalscrap'onChange={() => handleItemSelected('Metal Scrap')}/><br/>
                      <img src='matelscrap.jpg' alt='metalscrap'width="250" height="250"/>
                      <p>Heavy Iron</p>
                      <p><div className='icon'><FaRupeeSign/>25/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs1'>
                      <input type="checkbox" value='clothesscrap'onChange={() => handleItemSelected('clothes Scrap')}/><br/>
                      <img src='cottan clothes.jpg' alt='clothesscrap'width="250" height="250"/>
                      <p>Cottan Clothes</p>
                      <p><div className='icon'><FaRupeeSign/>3/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs'>
                      <input type="checkbox" value='boxscrap'onChange={() => handleItemSelected('Box Scrap')}/><br/>
                      <img src='carton box.jpg' alt='boxscrap'width="250" height="250"/>
                      <p>Carton Box</p>
                      <p><div className='icon'><FaRupeeSign/>10/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs1'>
                      <input type="checkbox" value='Oil Daba'onChange={() => handleItemSelected('Oil dabba Scrap')}/><br/>
                      <img src='Oil Daba.jpg' alt='Oil Daba'width="250" height="250"/>
                      <p>Oil Daba</p>
                      <p><div className='icon'><FaRupeeSign/>24/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs'>
                      <input type="checkbox" value='Notebooks/Books'onChange={() => handleItemSelected('note book Scrap')}/><br/>
                      <img src='notebook.jpg' alt='Notebooks/Books'width="250" height="250"/>
                      <p>Notebooks/Books</p>
                      <p><div className='icon'><FaRupeeSign/>10/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs1'>
                     <input type="checkbox" value='Office Paper'onChange={() => handleItemSelected('Office paper Scrap')}/><br/>
                      <img src='officepaper.jpg' alt='Office Paper'width="250" height="250"/>
                      <p>Office Paper</p>
                      <p><div className='icon'><FaRupeeSign/>10/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs'>
                      <input type="checkbox" value='Magazine'onChange={() => handleItemSelected('Magazine Scrap')}/><br/>
                      <img src='magazine.jpg' alt='Magazine'width="250" height="250"/>
                      <p>Magazine</p>
                      <p><div className='icon'><FaRupeeSign/>8/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs1'>
                      <input type="checkbox" value='Light Iron'onChange={() => handleItemSelected('light iron  Scrap')}/><br/>
                      <img src='light iron.jpg' alt='Light Iron'width="250" height="250"/>
                      <p>Light Iron</p>
                      <p><div className='icon'><FaRupeeSign/>20/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs'>
                      <input type="checkbox" value='Vahicle Scrap' onChange={() => handleItemSelected('vehicle Scrap')}/><br/>
                      <img src='vahicle.jpeg' alt='Vahicle Scrap'width="250" height="250"/>
                      <p>Vahicle Scrap</p>
                      <p><div className='icon'><FaRupeeSign/>0/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs1'>
                      <input type="checkbox" value='Mix Plastic'onChange={() => handleItemSelected('Mix Plastic Scrap')}/><br/>
                      <img src='Mix Plastic.jpeg' alt='Mix Plastic'width="250" height="250"/>
                      <p>Mix Plastic</p>
                      <p><div className='icon'><FaRupeeSign/>12/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs'>
                                         <input type="checkbox" value='RO (Water Purifier)'onChange={() => handleItemSelected('RO Scrap')}/><br/>
                      <img src='RO (Water Purifier).jpg' alt='RO (Water Purifier)'width="250" height="250"/>
                      <p>RO (Water Purifier)</p>
                      <p><div className='icon'><FaRupeeSign/>15/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs1'>
                      <input type="checkbox" value='stainless steel' onChange={() => handleItemSelected('stainless steel Scrap')}/><br/>
                      <img src='stainless steel.jpeg' alt='stainless steel'width="250" height="250"/>
                      <p>Stainless Steel</p>
                      <p><div className='icon'><FaRupeeSign/>40/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs'>
                      <input type="checkbox" value='Pet Bottles'onChange={() => handleItemSelected('pet bottle Scrap')}/><br/>
                      <img src='Pet Bottles.jpeg' alt='Pet Bottles'width="250" height="250"/>
                      <p>Plastic Pet Bottles</p>
                      <p><div className='icon'><FaRupeeSign/>14/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs1'>
                      <input type="checkbox" value='Milk Pouch'onChange={() => handleItemSelected('milk pouch Scrap')}/><br/>
                      <img src='milk pauch.jpg' alt='Milk Pouch'width="250" height="250"/>
                      <p>Milk Pouch</p>
                      <p><div className='icon'><FaRupeeSign/>22/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs'>
                      <input type="checkbox" value='Aluminium'onChange={() => handleItemSelected('aluminium Scrap')}/><br/>
                      <img src='Aluminium.jpeg' alt='Aluminium'width="250" height="250"/>
                      <p>Aluminium</p>
                      <p><div className='icon'><FaRupeeSign/>115/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs1'>
                      <input type="checkbox" value='Copper Utensils'onChange={() => handleItemSelected('copper utensils Scrap')}/><br/>
                      <img src='Copper Utensils.jpeg' alt='Copper Utensils'width="250" height="250"/>
                      <p>Copper Utensils</p>
                     <p><div className='icon'><FaRupeeSign/>380/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs'>
                      <input type="checkbox" value='Copper Cable Non Insulated'onChange={() => handleItemSelected('copper cable Scrap')}/><br/>
                      <img src='Copper Cable Non.jpeg' alt='Copper Cable Non Insulated'width="250" height="250"/>
                      <p>Copper Cable Non Insulated</p>
                      <p><div className='icon'><FaRupeeSign/>400/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs1'>
                      <input type="checkbox" value='Brass(pittal) Hardware'onChange={() => handleItemSelected('Brass hardware Scrap')}/><br/>
                      <img src='Hardware.jpg' alt='Brass(pittal) Hardware'width="250" height="250"/>
                      <p>Brass(pittal) Hardware</p>
                      <p><div className='icon'><FaRupeeSign/>330/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs'>
                      <input type="checkbox" value='Brass(pittal) Utensils'onChange={() => handleItemSelected('brass utensils Scrap')}/><br/>
                      <img src='Utensils.jpg' alt='Brass(pittal) Utensils'width="250" height="250"/>
                     <p>Brass(pittal) Utensils</p>
                      <p><div className='icon'><FaRupeeSign/>330/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs1'>
                      <input type="checkbox" value='Washing Machine Front'onChange={() => handleItemSelected('waching machine Scrap')}/><br/>
                      <img src='Washing Machine Front.jpeg' alt='Washing Machine Front'width="250" height="250"/>
                      <p>Washing Machine Front</p>
                      <p><div className='icon'><FaRupeeSign/>15/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs'>
                      <input type="checkbox" value='Washing Machine Top'onChange={() => handleItemSelected('washing machine Scrap')}/><br/>
                      <img src='Washing Machine Top.jpeg' alt='Washing Machine Top'width="250" height="250"/>
                      <p>Washing Machine Top</p>
                     <p><div className='icon'><FaRupeeSign/>24/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs1'>
                      <input type="checkbox" value='Refridgerator'onChange={() => handleItemSelected('refrigerator Scrap')}/><br/>
                      <img src='Refridgerator.jpeg' alt='Refridgerator'width="250" height="250"/>
                      <p>Refridgerator</p>
                      <p><div className='icon'><FaRupeeSign/>24/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs'>
                      <input type="checkbox" value='Computer LED'onChange={() => handleItemSelected('computer Scrap')}/><br/>
                      <img src='Computer LED.jpeg' alt='Computer LED'width="250" height="250"/>
                      <p>Computer LED</p>
                      <p><div className='icon'><FaRupeeSign/>350/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs1'>
                      <input type="checkbox" value='Computer CRT'onChange={() => handleItemSelected('computer Scrap')}/><br/>
                      <img src='Computer CRT.jpeg' alt='Computer CRT'width="250" height="250"/>
                      <p>Computer CRT</p>
                      <p><div className='icon'><FaRupeeSign/>450/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs'>
                      <input type="checkbox" value='Printer Scanner'onChange={() => handleItemSelected('printer Scrap')}/><br/>
                      <img src='Printer Scanner.jpeg' alt='Printer Scanner'width="250" height="250"/>
                      <p>Printer Scanner</p>
                      <p><div className='icon'><FaRupeeSign/>24/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs1'>
                      <input type="checkbox" value='Plastic Bags'onChange={() => handleItemSelected('plastic bag Scrap')}/><br/>
                      <img src='Plastic Bags.jpeg' alt='Plastic Bags'width="250" height="250"/>
                      <p>Plastic Bags</p>
                      <p><div className='icon'><FaRupeeSign/>5/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs'>
                     <input type="checkbox" value='PVC Pipe'onChange={() => handleItemSelected('PVC pipe Scrap')}/><br/>
                      <img src='PVC Pipe.jpeg' alt='PPVC Pipe'width="250" height="250"/>
                      <p>PVC Pipe</p>
                      <p><div className='icon'><FaRupeeSign/>13/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs1'>
                      <input type="checkbox" value='AC'onChange={() => handleItemSelected('Ac Scrap')}/><br/>
                      <img src='AC.jpeg' alt='AC'width="250" height="250"/>
                      <p>AC</p>
                      <p><div className='icon'><FaRupeeSign/>0/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs'>
                      <input type="checkbox" value='TV'onChange={() => handleItemSelected('TV Scrap')}/><br/>
                      <img src='TV.jpeg' alt='TV'width="250" height="250"/>
                      <p>TV</p>
                      <p><div className='icon'><FaRupeeSign/>130/kg</div></p>
                  </div>
                 <br/>
                  <div className='inputs1'>
                      <input type="checkbox" value='PVC Insulated Aluminum wire'onChange={() => handleItemSelected('pvc aluminium wire Scrap')}/><br/>
                      <img src='PVC Insulated Aluminum wire.jpg' alt='PVC Insulated Aluminum wire'width="250" height="250"/>
                      <p>PVC Insulated Aluminum wire</p>
                      <p><div className='icon'><FaRupeeSign/>13/kg</div></p>
                  </div>
                  <br/>
                 <div className='inputs'>
                      <input type="checkbox" value='PVC Insulated Copper wire'onChange={() => handleItemSelected('pvc copper wire Scrap')}/><br/>
                      <img src='Copper Cable Insu.jpeg' alt='PVC Insulated Copper wire'width="250" height="250"/>
                     <p>PVC Insulated Copper wire</p>
                      <p><div className='icon'><FaRupeeSign/>75/kg</div></p>
                </div>
                  <br/>
                <div className='inputs1'>
                      <input type="checkbox" value='Common wire'onChange={() => handleItemSelected('comman wire Scrap')}/><br/>
                      <img src='WIre nana.jpg' alt='Common wire'width="250" height="250"/>
                      <p>Common wire</p>
                      <p><div className='icon'><FaRupeeSign/>38/kg</div></p>
                  </div>
                  <br/>
                  <div className='inputs'>
                      <input type="checkbox" value='Tyre'onChange={() => handleItemSelected('tyre Scrap')}/><br/>
                      <img src='tyre.jpg' alt='Tyre'width="250" height="250"/>
                      <p>Tyre</p>
                      <p><div className='icon'><FaRupeeSign/>4/kg</div></p>
                  </div>
              <br/>
               {/* <div className='inputs1'>
                    <input type="checkbox" value='Shoes'onChange={() => handleItemSelected('shoes Scrap')}/><br/>
                     <img src='shoes.jpg' alt='Shoes'width="250" height="250"/>
                      <p>Shoes (Chappal)</p>
                      <p><div className='icon'><FaRupeeSign/>28/kg</div></p>
                </div>
                  <br/> */}
                  <div className='cont'>

          <Button variant="primary" onClick={handleContinue}>
            Continue
          </Button>
          </div>

          {logindata.date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{logindata.name} 😄</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Wish you many many happy returns of the day ! 🍰
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ''
          )}
          <br />
      <br />
      <br />
      <br />
          </div>
        </>
      )}
      
    </>
  );
};

export default Scraprates;
