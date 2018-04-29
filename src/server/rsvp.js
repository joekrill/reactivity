const Airtable = require('airtable');
const mailgun = require('mailgun-js');
const icalContent = require('./ical');
const emailContent = require('./email');

const base = Airtable.base(process.env.AIRTABLE_BASE_ID);
const mailer = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

function rsvp({ attending, comments, name, email, additionalGuests }, ip, ua, cb) {
  const additionalGuestNames = (additionalGuests || [])
    .map(n => n && n.trim())
    .filter(n => n);
  const guestCount = attending === 'Y' ? additionalGuestNames.length + 1 : 0;

  base('RSVPs').create(
    {
      Name: name || '',
      'Total Guests': guestCount,
      Email: email || '',
      'Guest 2': additionalGuestNames[0] || '',
      'Guest 3': additionalGuestNames[1] || '',
      'Guest 4': additionalGuestNames[2] || '',
      'Guest 5': additionalGuestNames[3] || '',
      Comments: comments,
      Submitted: new Date().toISOString(),
      'IP Address': ip || '',
      'User Agent': ua || '',
    },
    (airtableError, record) => {
      const result = {
        email: {
          sent: false,
        },
        saved: !airtableError,
        record,
      };

      if (airtableError || !email) {
        cb(airtableError, result);
        return;
      }

      const firstName = name.trim().split(/\s/)[0];

      mailer
        .messages()
        .send({
          from: process.env.RSVP_EMAIL_FROM,
          to: [email],
          'h:Reply-To': process.env.RSVP_EMAIL_REPLY_TO,
          subject: process.env.RSVP_EMAIL_SUBJECT || 'Thanks for your RSVP',
          text: emailContent.text({ name, firstName, additionalGuestNames, guestCount }),
          html: emailContent.html({ name, firstName, additionalGuestNames, guestCount }),
          attachment: new mailer.Attachment({
            data: Buffer.from(icalContent),
            filename: 'invite.ics',
          }),
        })
        .then(msg => {
          result.email.sent = true;
          cb(null, result);
        })
        .catch(mailgunError => {
          result.email.error = mailgunError.message;
          console.error('Mailgun Error', mailgunError);
        })
        .then(() => {
          cb(null, result);
        });
    },
  );
}



module.exports = rsvp;
