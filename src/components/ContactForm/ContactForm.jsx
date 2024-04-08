
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { nanoid } from 'nanoid'
import * as Yup from "yup";
import css from "./ContactForm.module.css"
import { useDispatch } from 'react-redux';

import { addContact } from '../../redux/contactsOps';

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required")
});

const ContactForm = () => {

    const dispatch = useDispatch();

        const handleSubmit = (values, actions) => {

        dispatch(addContact( {
            id: nanoid(),
            name: values.username,
            number: values.number
        }));

        actions.resetForm();
    };

    const nameFieldId = nanoid();
    const numberFieldId = nanoid();

    const initialValues = {
        username: "",
        number: ""
    };
    
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
            <Form className={css.form}>  
                <div className={css.nameContainer}>
                    <label  className={css.label} htmlFor={nameFieldId}>Name</label>
                    <Field className={css.input} type="text" name="username" id={nameFieldId} />
                    <ErrorMessage className={css.error} name="username" component="span" />
                </div>
                <div className={css.nameContainer}>
                    <label className={css.label} htmlFor={numberFieldId}>Number</label>
                    <Field className={css.input} type="text" name="number" id={numberFieldId} />
                    <ErrorMessage className={css.error} name="number" component="span" />
                </div>
                <button className={css.btnAdd} type='submit'>Add contact</button>
            </Form>  
        </Formik>
    );
};

export default ContactForm;
