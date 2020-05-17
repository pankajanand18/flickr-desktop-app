import React from 'react';
import { Contact } from './Interfaces';

const ContactCard = (props: { contact: Contact }): JSX.Element => {
  const { contact } = props;
  return (
    <div className="contact-card">
      <img src={contact.imageUrl} alt="hello" height="100px" />
      <h3>
        Name:
        {contact.name}
      </h3>
      <h3>
        Email:
        {contact.email}
      </h3>
      <h3>
        Phone:
        {contact.phone}
      </h3>
    </div>
  );
};
export default ContactCard;
