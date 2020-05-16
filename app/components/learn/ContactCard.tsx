import React from 'react';

function ContactCard([imageUrl, name, email, phone]: [
  string,
  string,
  string,
  string
]) {
  return (
    <div className="contact-card">
      <img src={imageUrl} alt="contact" />
      <h3>
        Name:
        {name}
      </h3>
      <p>
        Email:
        {email}
      </p>
      <p>
        phone:
        {phone}
      </p>
    </div>
  );
}
