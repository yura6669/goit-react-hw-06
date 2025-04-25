import React from 'react'
import Contact from './Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const query = useSelector(state => state.filter.name);
    const filteredContacts = contacts.filter(contact => { 
        return contact.name.toLowerCase().includes(query.toLowerCase());
    });
  return (
      <>
          <ul className={css.list}>
              {filteredContacts.map((contact) => {
                    return (
                        <li key={contact.id}>
                            <Contact contact={contact} />
                        </li>
                    )
              })}
          </ul>
    </>
  )
}

export default ContactList