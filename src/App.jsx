import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactList from './components/ContactList/ContactList.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps.js';
import { selectError, selectLoading } from './redux/contactsSlice.js';
import Loader from './components/Loader/Loader.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';

function App() {
  const loadind = useSelector(selectLoading);
  const error = useSelector(selectError)
  const dispatch = useDispatch();
  useEffect(() => {
dispatch(fetchContacts())
  }, [dispatch, fetchContacts])

  return (
    <>
          <div>
        <h1>Phonebook</h1>
          {error && <ErrorMessage/>}
        <ContactForm />
        
        {loadind && <Loader/>}
  <SearchBox/>
        <ContactList/>
</div>


    </>
  )
}

export default App
 