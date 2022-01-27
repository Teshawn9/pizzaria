import React from 'react';
import ThankYou from '../assets/img/thankyou.svg';

function Thankyou() {
  return (
      <>
      <section class="thankyou">
      <img src={ThankYou} alt="thankyou" />
    </section>
    <div class="thankyou-msg">
      <p>
        Thank you for your ordering. We received your request.<br />
        Our staff will be contacting with you to tell next steps
      </p>
      <button>Back To HomePage</button>
    </div>
      </>
  )
}

export default Thankyou;
