import propTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, handleChange }) => (
  <div>
    <label>Find contacts by Name </label>
    <input
      className={css.filter__name}
      type="text"
      name="filter"
      placeholder="Anna"
      value={filter}
      onChange={handleChange}
    />
  </div>
);

Filter.propTypes = {
  filter: propTypes.string,
  handleChange: propTypes.func.isRequired,
};
