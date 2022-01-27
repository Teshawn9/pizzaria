import React from 'react';
import Header from '../components/Header';
import MainImg from '../assets/img/main-img.png'
import About from '../components/About';
import item1 from '../assets/img/item-1.svg';
import Footer from '../components/Footer'

function Home() {
  return <>
  
<Header />
<section class="main-img">
      <img src={MainImg} alt="image" />
      <div class="main-txt">
        <p><span>Dino’s Pizzeria</span></p>
        <p>Pizza is our superpower.</p>
      </div>
    </section>
    <About />
    <center> <p class='paragraph'>---------Pizza-Menu--------</p></center>
  
    <section class="item-conatiner">
      <section class="item-grid">
        <div class="item">
          <img src={item1} alt="item" />
          <div class="description">
            <h2>Peppy veg</h2>
            <p>
              The Awesome Peppy veg with onions
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
      
  </>;
}
  

export default Home;

