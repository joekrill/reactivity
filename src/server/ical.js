const ical = require('ical-generator');

module.exports = ical({
  domain: 'karilynn-joe.com',
  timezone: 'America/New_York',
  events: [
    {
      start: new Date('2018-06-16T17:00:00'),
      end: new Date('2018-06-16T21:00:00'),
      summary: `Karilynn and Joe's Wedding`,
      description: `Karilynn and Joe's Wedding`,
      location: `Colonial Dames Society, 1630 Latimer Street in Philadelphia, PA 19103`,
      url: 'https://www.karilynn-joe.com',
      organizer: 'Karilynn and Joe <us@karilynn-joe.com>',
    },
  ],
}).toString();
