import { useState } from "react";
import "../../styles/Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm((prev) => !prev);
  };

  return (
    <div className="contact-container">
      {/* <div className="contact-header">
        <hr className="half-width" />
        <h2 className="contact-title ">Contact</h2>
        <hr className="half-width" />
      </div> */}
      <div className="contact-content">
        <div className="contact-description">
          <p>
            I am currently seeking employment,and I would appreciate it if you
          </p>
          <p> could contact me with any available job opportunities.</p>
        </div>
        <div className="contact-button " id="contact-button">
          {showContactForm ? (
            <button
              type="button"
              className="bg-primary/20"
              onClick={toggleContactForm}
            >
              Close
            </button>
          ) : (
            <button
              className="bg-primary/20"
              type="button"
              onClick={toggleContactForm}
            >
              Write Message
            </button>
          )}
        </div>
      </div>
      {showContactForm && <ContactForm />}
    </div>
  );
};

export default Contact;
