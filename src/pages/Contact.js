import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/Contact-form";
const Contact = () => {
  return (
    <div>
      <Header />

      <div id="contact-form">
        <div className="form">
          <div id="contact-container">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
