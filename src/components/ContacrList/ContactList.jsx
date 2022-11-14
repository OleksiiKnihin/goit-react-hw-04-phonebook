import React from "react";
import propTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => (
    <ul>
        {contacts.map((contact, id) => (
            <li className={css.contactList__item} key={id}>{contact.name}: {contact.number}
            <button
                type="button"
                className={css.contactList__btn}
                onClick={() => handleDelete(contact.id)}>
                Delete
            </button>
            </li>
        ))}
    </ul>
)

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};