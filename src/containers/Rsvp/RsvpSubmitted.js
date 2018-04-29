import React from 'react';

const RsvpSubmitted = ({
  additionalGuestNames,
  guestEmail,
  guestName,
  totalGuestCount,
  isAttending,
}) => (
  <div>
    <p>Thanks, {guestName}!</p>
    {isAttending
      ? `We can't wait to see you and we look forward to sharing our day with you.`
      : `We're sad you won't be able to make it, but thanks for letting us know.`
    }
    {isAttending && guestEmail && (
      <p>
        We sent an email confirmation to <strong>{guestEmail}</strong> with
        some of the wedding details.
      </p>
    )}
  </div>
)

export default RsvpSubmitted;
