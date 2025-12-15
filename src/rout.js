import React from 'react'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './home'
const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />}/>
    </Routes>
    </>
  );
}

export default Rout;