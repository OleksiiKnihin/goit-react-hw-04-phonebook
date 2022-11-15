import { useState } from 'react';
import propTypes from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = event => {
    const { value } = event.target;
    setName(value);
  };

  const handleChangeNumber = event => {
    const { value } = event.target;
    setNumber(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    handleSubmit({ name: name, number: number });
    form.reset();
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.contactForm}>
      <label className={css.contactForm__label}>
        Name
        <input
          type="text"
          name="name"
          placeholder="Angelina Jolie"
          className={css.contactForm__name}
          value={name}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.contactForm__label}>
        Number
        <input
          type="tel"
          name="number"
          placeholder="123-45-67"
          className={css.contactForm__name}
          value={number}
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.contactForm__btn}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};
