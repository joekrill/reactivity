import React from 'react';

const RsvpFormAdditionalGuestField = ({
  id,
  input,
  label,
  placeholder,
  type,
  meta: {
    touched,
    error,
  }
}) => (
  <label htmlFor={id}>{label}
    <input {...input} id={id} type={type} placeholder={placeholder} />
    {touched && error && <span>{error}</span>}
  </label>
);

export default RsvpFormAdditionalGuestField;
