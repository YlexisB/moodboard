import React, { useState } from "react";
import { CONTACT_STUFF } from "../constants";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
  }

  return (
    <div className={`contact-section ${submitted ? "change-padding" : ""}`}>
      {submitted ? (
        <p>{CONTACT_STUFF.contactSubmission}</p>
      ) : (
        <form id="contact-container ">
          <h1>Get In Touch</h1>
          <div className="input-field">
            <input
              placeholder="Name"
              className="user formEntry"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-field">
            <input
              placeholder="Email"
              className="user formEntry"
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-field">
            <textarea
              placeholder="Message"
              className="formEntry"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            id="submit-button"
            type="submit"
            value="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
