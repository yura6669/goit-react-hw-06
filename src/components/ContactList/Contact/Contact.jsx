import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteContact = (id) => { 
    dispatch({ type: 'contacts/deleteContact', payload: id });
  }
  return (
      <div className={css.container}>
          <ul>
              <li>
                  <FaUser className={css.icon} />
                  <p>{ contact.name }</p>
            </li>
              <li>
                  <FaPhoneAlt className={css.icon} />
                  <p>{ contact.number }</p>
            </li>
          </ul>
            <button className={css.button} type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </div>
  )
}

export default Contact