import React from 'react';
import MainImg from '../assets/img/main-img.png'

function MainImage() {
  return <>
 <section class="main-img">
      <img src={MainImg} alt="image" />
      <div class="main-txt">
        <p><span>Dino’s Pizzeria</span></p>
        <p>Pizza is our superpower.</p>
      </div>
    </section>

  </>;
}

export default MainImage;
