const title = "Karilynn & Joe's Wedding";
const eventDate = 'June 16th, 2018'
const description = `Details for the wedding of Karilynn Bayus and Joe Krill, ${eventDate} in Philadelphia, PA, USA`;

module.exports = {
  title,
  description,
  head: {
    defaultTitle: `${title} - ${eventDate}`,
    titleTemplate: `%s - ${title}`,
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'description', content: description },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileColor', content: '#2d89ef' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon-16x16.png',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon-32x32.png',
        sizes: '32x32'
      },
      { rel: 'manifest', href: 'manifest.json' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Great+Vibes|Raleway|Montserrat:400,600',
      },
    ],
    htmlAttributes: {
      lang: 'en',
    },
  },
  hotel: {
    placeId: 'ChIJZVdUezrGxokRCUImH2vOZ1U',
    bookingUrl: 'https://www.myhotelreservation.net/b/haphlwar/HAPHLWAR/?i=WWGRP038A&rac=*G38$&f=2018-06-16',
  },
  venue: {
    placeId: 'ChIJB5OL9jrGxokRDmSeDBOaCv0',
  },
  contact: {
    email: 'hi@joe-karilynn.com',
  },
  paths: {
    home: '',
    event: 'wedding',
    registry: 'registry',
    contact: 'contact',
    rsvp: 'rsvp',
    hotel: 'hotel',
    shell: 'shell',
  },
  menu: {
    order: ['home', 'event', 'registry', 'rsvp', 'hotel', 'contact'],
    labels: {
      home: 'Home',
      event: 'Wedding',
      registry: 'Registry',
      contact: 'Contact Us',
      rsvp: 'RSVP',
      hotel: 'Hotel',
    }
  }
};
