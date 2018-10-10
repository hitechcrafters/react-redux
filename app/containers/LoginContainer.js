import React from 'react';
import { Field, reduxForm } from 'redux-form'

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

let LoginContainer = props => {
  const { handleSubmit } = props;

  return (
    <form
      onSubmit={handleSubmit}
    >
      <Field
        name="login"
        label="Login:"
        component={inputField}
        type="text"
      />
      <Field
        name="pass"
        label="Pass:"
        component={inputField}
        type="text"
      />
      <button type="submit">Submit</button>
    </form>
  )
};

LoginContainer = reduxForm({
  form: 'login',
  destroyOnUnmount: false,
})(LoginContainer);

export default LoginContainer;
