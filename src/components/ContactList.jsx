import React from 'react';

const ContactList = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className="contact-list">
      {filteredContacts.map(contact => (
        <li key={contact.id} className="contact-list__item">
          <span className="contact-list__name">{contact.name}: </span>
          <span>{contact.number}</span>
          <button
            onClick={() => deleteContact(contact.id)}
            className="contact-list__button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
