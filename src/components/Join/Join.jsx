import React, { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();
     const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i3psxa9', 'template_j1y80ns', form.current, 
         '9Lef9Dm_S46hmaQr3',
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="strock-text">Ready to</span>
          <span>Level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="strock-text">with us?</span>
        </div>
      </div>
      <div className="right-j"></div>
      <form ref={form} className="email-container" onSubmit={sendEmail}>
        <input type="email" name="user_email"  placeholder="Enter your Email address"/>
        <hr></hr>  <hr className="hr2" />
        <button className="btn btn-j">Join Now</button>
      </form>
    </div>
  );
};

export default Join;
