import React, { Component } from 'react';
import propTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    };

    handleNameChange = (event) => {
    this.setState({[event.currentTarget.name]: event.currentTarget.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  }
    
  render() {
        return (
        <form onSubmit={this.handleSubmit} className={css.contactForm}>
          <label className={css.contactForm__label}>
            Name
            <input
              type="text"
                name="name"
                placeholder="Anna Fomina"
                className={css.contactForm__name}
              value={this.state.name}
              onChange={this.handleNameChange}
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
                value={this.state.number}
                onChange={this.handleNameChange}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
            </label>
          <button type="submit" className={css.contactForm__btn}>Add contact</button>
        </form>
    )
}
}

ContactForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};