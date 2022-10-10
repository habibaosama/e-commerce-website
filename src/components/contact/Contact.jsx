import React, { useState } from "react";
import './contact.css'
const FORM_ENDPOINT = ""; // TODO - fill on the later step

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2 className="non">Thank you!</h2>
        <div className="non">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
        <span className="letter">Contact Us</span><br/>
      <div className="name">
        
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div className="mail">
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div className="mssg">
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div className="btn-pri">
        <button clasSName="bb" type="submit"> Send a message </button>
      </div>
    </form>
  );
};

export default Contact;