import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name);
    console.log(number);

    onSubmit({ name, number });
    resetSubmit();
  };

  const resetSubmit = () => {
    setName('');
    setNumber('');
  };

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor={inputNameId}>
        <span className={css.form_title}>Name</span>
        <input
          className={css.form_input}
          type="text"
          name="name"
          value={name}
          id={inputNameId}
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor={inputNumberId}>
        <span className={css.form_title}>Number</span>
        <input
          className={css.form_input}
          type="tel"
          name="number"
          value={number}
          id={inputNumberId}
          required
          onChange={handleChange}
        />
      </label>
      <button className={css.form_btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

// handleSubmit = e => {
//   e.preventDefault();

//   this.props.onSubmit(this.state);
//   this.resetSubmit();
// };

// resetSubmit = () => {
//   this.setState({
//     name: '',
//     number: '',
//   });
// };

//   render() {
//     const { name, number } = this.state;
//     const inputNameId = nanoid();
//     const inputNumberId = nanoid();

//     return (
//       <form className={css.form} onSubmit={this.handleSubmit}>
//         <label htmlFor={inputNameId}>
//           <span className={css.form_title}>Name</span>
//           <input
//             className={css.form_input}
//             type="text"
//             name="name"
//             value={name}
//             id={inputNameId}
//             required
//             onChange={this.handleChange}
//           />
//         </label>
//         <label htmlFor={inputNumberId}>
//           <span className={css.form_title}>Number</span>
//           <input
//             className={css.form_input}
//             type="tel"
//             name="number"
//             value={number}
//             id={inputNumberId}
//             required
//             onChange={this.handleChange}
//           />
//         </label>
//         <button className={css.form_btn} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
