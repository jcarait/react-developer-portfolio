import React from 'react';

import './Contact.scss';

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-box">
        <div className="contact-links">
          <h2>CONTACT</h2>
          <div className="links">
            <div className="link">
              <a
                href="https://www.linkedin.com/in/jonathan-florido-carait-107912216/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                  alt="linkedin"
                  className="contact-image"
                />
              </a>
            </div>
            <div className="link">
              <a
                href="https://github.com/jcarait"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://i.postimg.cc/YCV2QBJg/github.png"
                  alt="github"
                  className="contact-image"
                />
              </a>
            </div>
            <div className="link">
              <a href="mailto:jonocdev@gmail.com">
                <img
                  src="https://i.postimg.cc/NjLfyjPB/email.png"
                  alt="email"
                  className="contact-image"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form-wrapper">
          <form>
            <div className="form-item">
              <input type="text" name="sender" required />
              <label>Name:</label>
            </div>
            <div className="form-item">
              <input type="text" name="email" required />
              <label>Email:</label>
            </div>
            <div className="form-item">
              <textarea className="" name="message" required></textarea>
              <label>Message:</label>
            </div>
            <button className="submit-btn">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
