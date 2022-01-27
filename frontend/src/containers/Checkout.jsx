import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Checkout() {
  return (
      <>
      <Header />
      <section class="checkout">
      <img src="img/order-items.svg" alt="image" />
    </section>
    <section class="dilivery">
      <h2>Deliver Details</h2>
    </section>
    <div class="details">
      <p>Please check your items and confirm it</p>
      <div class="item-details">
        <p>Cheese n tomato</p>
        <p>1</p>
        <p>$40</p>
      </div>
      <div class="item-details">
        <p>Cheese n tomato</p>
        <p>2</p>
        <p>$160</p>
      </div>
      <div class="item-details">
        <p>Cheese n tomato</p>
        <p>1</p>
        <p>$200</p>
      </div>
      <div class="item-total">
        <p>Total Price</p>
        <p><span> 4</span></p>
        <p>$400</p>
      </div>
    </div>
    <section class="checkout-form">
      <div class="form-details">
        <label for="full name">Full Name</label><br />
        <input type="text" /><br /><br />
        <label for="phone">Phone Number</label><br />
        <input type="number" /><br /><br />
        <label for="street">Street address or P.O. Box</label><br />
        <input type="text" /><br /><br />
        <label for="pin">PIN Code</label><br />
        <input type="number" /><br /><br />
        <label for="Landmark">Apt, suite, unit, building, floor, etc</label
        ><br />
        <input type="text" /><br /><br />
        <label for="city">City</label><br />
        <input type="text" /><br /><br />
        <label for="state">State</label><br />
        <input type="text" /><br /><br />
        <button>Submit</button>
      </div>
    </section>
    <Footer />
      </>
  )
}

export default Checkout;
