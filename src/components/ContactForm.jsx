import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number
    };

    addContact(newContact);

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className="contact-form__input"
          style={{ marginTop: '10px' }}
        />
      </label>

      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className="contact-form__input"
          style={{ marginTop: '10px' }}
        />
      </label>

      <button type="submit" className="contact-form__button">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
