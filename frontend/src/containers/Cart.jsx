import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Item1 from '../assets/img/item-1.svg'
function Cart() {
  return (
      <>
      <Header />
      <h2>Orders</h2>
    <section class="cart-container">
      <section class="cart-grid">
        <div class="item">
          <img src={Item1} alt="item" />
          <div class="description">
            <h2>Peppy veg</h2>
            <p>
              The Awesome Peppy veg with onions <br />
              and tomato with cheese
            </p>
          </div>
          <div class="item-bottom">
            <p>$50</p>
            <button>Add</button>
          </div>
        </div>
      
      </section>
    </section>
    <Footer />
      </>
  )
}

export default Cart;
