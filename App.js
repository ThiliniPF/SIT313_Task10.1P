import React from 'react';
import './App.css';
import Navbar from './navbar'
import DevCardList from './DevCardList';
import CustomerCardList from './CustomerCardList';
import Subscribe from './Subscribe';
import Footer from './Footer';

function App() 
{
  return (
    <div>
      <Navbar
        text = "DevLink Marketplace"
        text1 = " Find DEV"
        text2 = " Find Jobs"
        text3 = " Login"
        text4 = " Create Account"
      />

      <img src="/image.jpg" style={{ width: '100%' }} className="image" />
      
      <h1 style={{textAlign: 'center' }}> Featured Freelancers </h1>
      <DevCardList/>
      <button className="button"> Show More </button>
      
      <h1 style={{textAlign: 'center' }}> Featured Customers </h1>
      <CustomerCardList/>
      <button className="button"> See all customers </button>

      <Subscribe/>

      <Footer/>
    </div>
  );
}

export default App