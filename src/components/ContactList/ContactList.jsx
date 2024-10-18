import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={s.contact_list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;