import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContacrList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const [firstRenderFlag, setFlag] = useState(true);

  const handleSubmit = event => {
    const id = nanoid();
    const name = event.name;
    const number = event.number;
    const contactsLists = [...contacts];

    if (contactsLists.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }
    setContacts(contactsLists);
  };

  const handleChange = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return filterContactsList;
  };

  const handleDelete = e => {
    setContacts(contacts.filter(contact => contact.id !== e));
  };

  //  useEffect(() => {}, []);

  useEffect(() => {
    if (firstRenderFlag) {
      const contacts = localStorage.getItem('contacts');

      if (contacts) {
        const contactsParsed = JSON.parse(contacts);
        if (contactsParsed) {
          setContacts(contactsParsed);
        }
      }
      setFlag(false);
    } else {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts, firstRenderFlag]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Your phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />

      <h2>Contacts from your phonebook</h2>
      <div
        style={{
          padding: '30px 50px',
          border: '2px solid black',
          borderRadius: '30px',
          backgroundColor: 'rgb(236, 225, 247)',
        }}
      >
        <Filter value={filter} handleChange={handleChange} />
        <ContactList
          contacts={getFilteredContacts()}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};
