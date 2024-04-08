import css from "./Contact.module.css"
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";


const Contact = ({ contact: { name, number, id } }) => {
    const dispatch = useDispatch();
    return (
        <div className={css.contactContainer}> 
            <div className={css.contactText}>
             <p className={css.text}> <FaUser />{ name}</p>
            <p className={css.text}> <FaPhoneAlt />
{ number}</p>
            </div>
             <button  className={css.btnDel} onClick={()=> dispatch(deleteContact(id))}>Delete</button></div>
            
  
)
}
export default Contact

