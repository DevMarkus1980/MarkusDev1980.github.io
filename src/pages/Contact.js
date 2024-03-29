import React from 'react';
import content from '../assets/content.json';

function Contact() {
  return (
    <div className='content'>
      <h1>{content.contact.title}</h1>
      <p>{content.contact.description}</p>
      <div className="contact-methods-container">
        <div className="contact-methods-list">
          {content.contact.contactMethods.map((method, index) => (
            <div key={index} className="contact-method">
              <a href={method.link} className="contact-link">
                <i className={method.icon}></i>
                <span>{method.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
