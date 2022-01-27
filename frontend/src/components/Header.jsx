import React from 'react';
import cart from '../assets/img/cart.svg'

function Header() {
  return <>
       <header>
      <div class="logo">
        <h4>Dino’s pizzeria</h4>
      </div>
      <div class="right-nav">
        <a href="#">Sign Up</a>
        <img src={cart} alt="image" />
      </div>
    </header>

  </>;
}

export default Header;
