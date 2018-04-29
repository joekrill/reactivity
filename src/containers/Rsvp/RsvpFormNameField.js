import React from 'react';
import { Field } from 'redux-form';
import style from './RsvpForm.scss';

const RsvpFormNameField = ({
  disabled,
  input,
  placeholder,
  type,
  meta: { touched, error }
}) => (
  <div className={touched && error ? style.FieldError : style.Field}>
    <label htmlFor="RsvpForm.name">
      <span>Your name</span>
      <small>Please enter your name as it appeared on your invitation.</small>
    </label>
    <div>
      <div>
        <input {...input} placeholder={placeholder} type={type} disabled={disabled} />
        {touched && error && <span className={style.FieldErrorMessage}>{error}</span>}
       </div>
    </div>
  </div>
);

export default RsvpFormNameField;
