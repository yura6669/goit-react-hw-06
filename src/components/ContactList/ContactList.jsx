import React from 'react'
import Contact from './Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({contacts, onDeleteContact}) => {
  return (
      <>
          <ul className={css.list}>
              {contacts.map((contact) => {
                    return (
                        <li key={contact.id}>
                            <Contact contact={contact} onDeleteContact={onDeleteContact} />
                        </li>
                    )
              })}
          </ul>
    </>
  )
}

export default ContactList