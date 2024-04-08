import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from "./ContactList.module.css"
import {selectFilterContacts } from "../../redux/contactsSlice";


const ContactList = () => {
 
    const contacts = useSelector(selectFilterContacts);

    return (
        <ul className={css.listContact}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                
                     <Contact contact={contact}  />
                </li>
            ))}
        </ul>
    );
};

export default ContactList


