import React from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}

    if (!values.firstName) {
      errors.firstName = 'Required';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    }

    if (values.firstName && values.firstName.length < 5) {
      errors.firstName = 'Must be longer than 5 characters.';
    }

    if (values.lastName && values.lastName.length < 5) {
      errors.lastName = 'Must be longer than 5 characters.';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address.';
    }

  return errors;
};

const inputField = ({ name, label, input, meta, type }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input
      className={meta.touched && !meta.error ? 'ok' : ''}
      name={name}
      type={type} {...input}
    />
    {
      meta.touched && meta.error &&
      <span>{meta.error}</span>
    }
  </div>
);

let ContactForm = props => {
  const { handleSubmit, reset, submitting } = props;

  return (
    <form
      onSubmit={handleSubmit}
    >
      <Field
        name="firstName"
        label="First Name:"
        component={inputField}
        type="text"
      />
      <Field
        name="lastName"
        label="Last Name:"
        component={inputField}
        type="text"
      />
      <Field
        name="email"
        label="Email:"
        component={inputField}
        type="email"
      />
      <button type="submit">Submit</button>
      <button
        type="button"
        disabled={submitting}
        onClick={reset}>
        Clear
      </button>
    </form>
  )
};

ContactForm = reduxForm({
  form: 'contact',
  validate,
})(ContactForm);

export default ContactForm;
