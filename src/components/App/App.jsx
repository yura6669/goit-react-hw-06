import initialContacts from '../../assets/json/initial-contacts.json';

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useState, useEffect } from 'react';

import css from './App.module.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts);
      if (parsedContacts.length > 0) {
        return parsedContacts;
      }
    }
    return initialContacts;
  });

  const [query, setQuery] = useState('');

  const onAddContact = (newContact) => { 
    const isDuplicateNumber = contacts.some(contact => contact.number === newContact.number);
    if (isDuplicateNumber) { 
      alert(`"${newContact.number}" is already in contacts.`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const onDeleteContact = (contactId) => { 
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  }

  const onSearch = (search) => { 
    setQuery(search);
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(query.toLowerCase());
  });
  
  useEffect(() => { 
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox query={query} onSearch={onSearch} />
      <ContactList contacts={filteredContacts} onDeleteContact={onDeleteContact} />
    </div>
  )
}

export default App
