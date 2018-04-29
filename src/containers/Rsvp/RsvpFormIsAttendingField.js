import React from 'react';
import { Field } from 'redux-form';
import style from './RsvpForm.scss';

const RsvpFormIsAttendingField = ({
  disabled,
  id,
  input: { name, ...input },
  isAttending,
  placeholder,
  totalGuestCount,
  type,
  meta: { touched, error, submitting }
}) => (
  <div className={style.Field}>
    <span className={style.Label}>Will you be joining us?</span>
    <div className={style.AttendingField}>
      <label
        className={
          isAttending
            ? style.RadioSelectFieldSelected
            : style.RadioSelectFieldUnselected
        }
        htmlFor={`${id}.Yes`}
      >
        <span className={style.RadioSelectFieldMainText}>Yes</span>
        <Field
          component="input"
          disabled={submitting}
          id={`${id}.Yes`}
          name={name}
          type="radio"
          value="Y"
        />
        <small>{totalGuestCount > 1 ? 'We' : `I`} can&apos;t wait</small>
      </label>
      <label
        className={
          isAttending
            ? style.RadioSelectFieldUnselected
            : style.RadioSelectFieldSelected
        }
        htmlFor={`${id}.No`}
      >
        <span className={style.RadioSelectFieldMainText}>No</span>
        <Field
          component="input"
          disabled={submitting}
          id={`${id}.No`}
          name={name}
          type="radio"
          value="N"
        />
        <small>I can&apos;t make it</small>
      </label>
    </div>
  </div>
);

export default RsvpFormIsAttendingField;
