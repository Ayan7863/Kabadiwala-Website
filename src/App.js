// import React from 'react'
// import Nav from './nav'
// import Login from './login'
// import Register from './Signin'
// import Errror from './error';
// import Rout from './rout'
// import { BrowserRouter , Route, Routes } from 'react-router-dom';
// import Home from './home'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Scraprates from './scraprates';
// import Footer from './footer';
// import PickupForm from './pickup from'
// import About from './about'
// import ContactUs from './contactus'
// import Admin from './admin'
// import './App1.css'
// const App = () => {


//   return (
//     <>
    
//     <BrowserRouter>
//     <Nav/>
   
//     <Routes>
//      < Route path='/login' element={<Login/>}/>
//       <Route path='/Signin' element={<Register/>}/>
//       <Route path='/home' element={<Home/>}/>
//       <Route path='/nav' element={<Nav/>}/>
//       <Route path='/scraprates' element={<Scraprates/>}/>
//       <Route path='/Error' element={<Errror />} />
//       <Route path='/pickup' element={<PickupForm/>} />
//       <Route path='/about' element={<About />} />
//       <Route path='/ContactUs' element={<ContactUs />} />
//       <Route path='/admin' element={<Admin />} />
//     </Routes>
    
    
//     <Rout/>
//     <Footer/> 
//     </BrowserRouter>
//     </>
//   );
//   }

// export default App;
// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './nav';
import Login from './login';
import Register from './Signin';
import Error from './error';
import Rout from './rout';
import Home from './home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scraprates from './scraprates';
import Footer from './footer';
import PickupForm from './pickup from';
import About from './about';
import ContactUs from './contactus';
import Admin from './admin';
import AppLinkPage from './AppLinkPage'; // Create a component for your app link page
import './App1.css';

// App.js




const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        {isMobile ? (
          <Routes>
            <Route path='/*' element={<AppLinkPage />} />
          </Routes>
        ) : (
          <>
            <Nav />
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/Signin' element={<Register />} />
              <Route path='/home' element={<Home />} />
              <Route path='/nav' element={<Nav />} />
              <Route path='/scraprates' element={<Scraprates />} />
              <Route path='/Error' element={<Error />} />
              <Route path='/pickup' element={<PickupForm />} />
              <Route path='/about' element={<About />} />
              <Route path='/ContactUs' element={<ContactUs />} />
              <Route path='/admin' element={<Admin />} />
            </Routes>
            <Rout />
            <Footer />
          </>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
