import React from 'react';
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import compose from '../../helpers/compose';
import RsvpSubmitted from './RsvpSubmitted';
import RsvpFormIsAttendingField from './RsvpFormIsAttendingField';
import RsvpFormNameField from './RsvpFormNameField';
import RsvpFormAdditionalGuestsFieldArray from './RsvpFormAdditionalGuestsFieldArray';
import submit from './submit';
import style from './RsvpForm.scss';

const RsvpForm = ({
  additionalGuestNames,
  guestName,
  guestEmail,
  totalGuestCount,
  isAttending,
  handleSubmit,
  error,
  pristine,
  reset,
  submitting,
  submitFailed,
  submitSucceeded,
}) => (
  submitSucceeded ? (
    <RsvpSubmitted
      additionalGuestNames={additionalGuestNames}
      guestName={guestName}
      guestEmail={guestEmail}
      isAttending={isAttending}
      totalGuestCount={totalGuestCount}
    />
  ) : (
    <form onSubmit={handleSubmit(submit)} className={style.RsvpForm}>
      <Field
        component={RsvpFormNameField}
        disabled={submitting}
        id="RsvpForm.name"
        name="name"
        placeholder="Full name"
        type="text"
      />
      <Field
        component={RsvpFormIsAttendingField}
        disabled={submitting}
        id="RsvpForm.Attending"
        isAttending={isAttending}
        totalGuestCount={totalGuestCount}
        name="attending"
      />
      {isAttending && (<div className={style.Field}>
        <label htmlFor="RsvpForm.email">
          <span>Your email address</span>
          <small>
            Optional, but we&apos;ll send you a confirmation with the details, and
            a link to photos after the event.
          </small>
        </label>
        <div>
          <Field
            component="input"
            disabled={submitting}
            id="RsvpForm.email"
            name="email"
            placeholder="Email address"
            type="email"
          />
        </div>
      </div>)}
      {isAttending && (
        <FieldArray
          component={RsvpFormAdditionalGuestsFieldArray}
          name="additionalGuests"
        />
      )}
      <div className={style.Field}>
        <label htmlFor="RsvpForm.comments">
          {isAttending ? (
            <span>
              Ok, so it looks like it&apos;s
              {totalGuestCount === 1 && ' just going to be you.'}
              {totalGuestCount === 2 && ` going to be 2 total - you and ${additionalGuestNames[0]}`}
              {totalGuestCount > 2 && ` going to be a total of ${totalGuestCount} - you plus ${totalGuestCount - 1} guests. `}
              </span>
            ) : (
              <span>Oh no! Sorry you can&apos;t make it - We&apos;ll miss you.</span>
            )}
            <small>Anything else you want to add?</small>
        </label>
        <div>
          <Field
            component="textarea"
            disabled={submitting}
            id="RsvpForm.comments"
            name="comments"
          />
        </div>
      </div>
      <button type="submit" disabled={submitting}>
        <span className={style.SubmitText}>Submit</span>
        {submitting && <div className={style.LoadingSpinner} />}
      </button>
      {error && <p className={style.SubmitError}>{error}</p>}
    </form>
  )
);

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'We are going to need your name';
  }

  return errors;
};

/**
 * We can't wait to see you!
This is the biggest day of our lives,
and we look forward to sharing it with you.
 */

const valueSelector = formValueSelector('rsvp');

export default compose(
  reduxForm({
    form: 'rsvp',
    initialValues: {
      attending: 'Y',
      additionalGuests: [''],
    },
    validate,
  }),
  connect(state => {
    const isAttending = valueSelector(state, 'attending') === 'Y';
    const guestName = valueSelector(state, 'name');
    const guestEmail = valueSelector(state, 'email');
    const additionalGuests = valueSelector(state, 'additionalGuests') || [];
    const additionalGuestNames = additionalGuests
      .map(name => name && name.trim().split(/\s/)[0])
      .filter(name => name);

    return {
      additionalGuestNames: isAttending ? additionalGuestNames : [],
      guestEmail,
      guestName: guestName && guestName.trim().split(/\s/)[0],
      isAttending,
      totalGuestCount: isAttending ? additionalGuestNames.length + 1 : 0,
    };
  }, {}),
)(RsvpForm);
