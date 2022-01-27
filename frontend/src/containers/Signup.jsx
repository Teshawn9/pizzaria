import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainImage from '../components/MainImage';
function Signup() {
  return (
    
      <>
      <Header />
      <MainImage />
     
    <section class="gradient"></section>
    <section class="sign-up">
      <div class="sign-up-form">
        <p><span> Dino’s pizzeria</span></p>
        <p>Sign Up</p>
        <div class="input-feilds">
          <label for="name">Name</label><br />
          <input type="text" placeholder="UserName" /><br /><br />
          <label for="email">Email</label> <br />
          <input type="email" placeholder="User Email Address" /><br /><br />
          <label for="password">Password</label><br />
          <input type="password" placeholder="Type Your Password" />
        </div>
        <button>Sign Up</button>
      </div>
    </section>
    <Footer />
      </>
  )
}

export default Signup;
