import React from 'react';
import { Field } from 'redux-form';
import RsvpFormGuestCountSelectValue from './RsvpFormGuestCountSelectValue';
import RsvpFormAdditionalGuestField from './RsvpFormAdditionalGuestField';
import ordinalize from '../../helpers/ordinalize';
import style from './RsvpForm.scss';

const RsvpFormAdditionalGuestsFieldArray = ({ fields, meta: { error, submitFailed, submitting } }) => (
  <ul className={style.AdditionaGuestsList}>
    <li className={style.Field}>
      <div className={style.Label}>
        <span>Any additional guests coming?</span>
        <small>Sorry, but our venue does not allow children.</small>
      </div>
      <div className={style.AddGuestButton}>
        {[0, 1, 2, 3, 4].map(value => (
          <RsvpFormGuestCountSelectValue
            key={value}
            id="RsvpForm.GuestCount"
            name="guests"
            selected={value === fields.length}
            value={value}
            onChange={e => {
              const count = parseInt(e.target.value, 0);
              const currentCount = fields.length;

              for (let i = count; i > currentCount; i -= 1) {
                fields.push();
              }
              for (let i = count; i < currentCount; i += 1) {
                fields.pop();
              }
            }}
          />
        ))}
      </div>
    </li>
    {fields.map((guest, index) => (
      <li key={index} className={style.AdditionaGuestsListItem}>
        <Field
          name={guest}
          type="text"
          component={RsvpFormAdditionalGuestField}
          id={`RsvpForm.AdditionalGuests.${index}`}
          label={`${ordinalize(index + 2)} guest`}
          placeholder={`${ordinalize(index + 2)} guest's full name`}
        />

      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
);

export default RsvpFormAdditionalGuestsFieldArray;
