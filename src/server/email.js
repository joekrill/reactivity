const EVENT_MARKUP = ({ name }) => `
  <script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "EventReservation",
    "reservationNumber": "${name}",
    "reservationStatus": "http://schema.org/Confirmed",
    "underName": {
      "@type": "Person",
      "name": "${name}"
    },
    "potentialAction": {
      "@type": "ViewAction",
      "target": "https://www.karilynn-joe.com/wedding",
      "url": "https://www.karilynn-joe.com/wedding",
      "name": "Wedding Details"
    },
    "url": "https://www.karilynn-joe.com/wedding",
    "reservationFor": {
      "@type": "Event",
      "name": "Karilynn and Joe's Wedding",
      "startDate": "2018-06-16T17:00:00-04:00",
      "endDate": "2018-06-16T21:00:00-04:00",
      "location": {
        "@type": "Place",
        "name": "Colonial Dames Society",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1630 Latimer Street",
          "addressLocality": "Philadelphia",
          "addressRegion": "PA",
          "postalCode": "19103",
          "addressCountry": "US"
        }
      }
    }
  }
  </script>
`;

const countConfirmation = ({ guestCount, additionalGuestNames }) => {
  if (guestCount === 1) {
    return `We have you coming by yourself, no guest.`;
  }

  if (guestCount === 2) {
    return `We have you coming with one additional guest - ${additionalGuestNames[0]}.`;
  }

  return `We have you coming with ${guestCount - 1} guests (${guestCount} including you).`;
};

const html = ({ firstName, name, additionalGuestNames, guestCount }) => `
<html>
  <body>
    ${EVENT_MARKUP({ name })}

    <p>Hi ${firstName},</p>
    <p>
      We received your wedding RSVP, thanks! We're so excited you can make it.
      ${countConfirmation({ additionalGuestNames, guestCount })}
      If anything changes just let us know.
      We're looking forward to seeing you on June 16th at 5pm!
    </p>
    <p>
      Directions, hotel information, and other
      details can be found on our website at <a href="https://www.karilynn-joe.com/">karilynn-joe.com</a>.
    </p>

    <p>Best Regards,</p>
    <p>Karilynn and Joe</p>
    </p>
  </body>
</html>
`;

const text = ({ firstName, additionalGuestNames, guestCount }) => `
Hi ${firstName},

We received your wedding RSVP, thanks! We're so excited you can make it. ${countConfirmation({ additionalGuestNames, guestCount })}. If anything changes just let us know. We're looking forward to seeing you on June 16th at 5pm!

Directions, hotel information, and other details can be found on our website at https://www.karilynn-joe.com.

Best Regards,

Karilynn and Joe
`;

module.exports = { html, text };
