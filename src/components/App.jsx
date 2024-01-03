import { useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';

// const LS_KEY = 'phonebook';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = data => {
    const { name, number } = data;
    console.log(data);

    const getName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (getName) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    console.log(contact);

    setContacts([contacts]);
  };

  const deleteContact = id => {
    setContacts(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  const handleFilter = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const showFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={css.app_conteiner}>
      <h1 className={css.app_title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={css.app_subtitle}>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      {contacts.length === 0 ? (
        <p className={css.app_text}>Your contacts list is empty.</p>
      ) : (
        <ContactList
          contacts={showFilteredContacts}
          deleteContact={deleteContact}
        />
      )}
    </div>
  );
}

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const savedState = JSON.parse(localStorage.getItem(LS_KEY));
//     if (savedState) {
//       this.setState({ contacts: savedState });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts !== contacts) {
//       localStorage.setItem(LS_KEY, JSON.stringify(contacts));
//     }
//   }

//   addContact = data => {
//     const { contacts } = this.state;
//     const { name, number } = data;

//     const getName = contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (getName) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     console.log(contact);

//     this.setState(prevState => ({
//       contacts: [contact, ...prevState.contacts],
//     }));
//   };

// deleteContact = id => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== id),
//   }));
// };

// handleFilter = e => {
//   this.setState({
//     filter: e.currentTarget.value,
//   });
// };

// showFilteredContacts = () => {
//   const { contacts, filter } = this.state;
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

//   render() {
//     const { contacts, filter } = this.state;
//     const showFilter = this.showFilteredContacts();

//     return (
//       <div className={css.app_conteiner}>
//         <h1 className={css.app_title}>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />
//         <h2 className={css.app_subtitle}>Contacts</h2>
//         <Filter value={filter} onChange={this.handleFilter} />
//         {contacts.length === 0 ? (
//           <p className={css.app_text}>Your contacts list is empty.</p>
//         ) : (
//           <ContactList
//             contacts={showFilter}
//             deleteContact={this.deleteContact}
//           />
//         )}
//       </div>
//     );
//   }
// }
