import { nanoid } from 'nanoid';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  const inputFilterId = nanoid();

  return (
    <label className={css.filter} htmlFor={inputFilterId}>
      <span className={css.filter_text}>Find contact by name</span>
      <input
        className={css.filter_input}
        type="text"
        name="filter"
        value={value}
        id={inputFilterId}
        onChange={onChange}
      />
    </label>
  );
};
