import css from './ContactListItem.module.css';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={css.item}>
      <p>
        <span className={css.item_name}>{name}:</span>
        <span className={css.item_number}>{number}</span>
      </p>
      <button
        className={css.item_btn}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};
