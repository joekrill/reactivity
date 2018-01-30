const title = "Karilynn & Joe's Wedding";
const description = `Details for the wedding of Karilynn Bayus and Joe Krill, June 16th, 2018 in Philadelphia, PA, USA`;

module.exports = {
  title,
  description,
  head: {
    defaultTitle: `${title} - June 16th, 2018`,
    titleTemplate: `%s - ${title}`,
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      {
        name: 'description',
        content: description,
      },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon-16x16.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon-32x32.png',
        sizes: '16x16'
      },
      { rel: 'manifest', href: 'manifest.json' },
      { rel: 'mask-icon', href: 'msapplication-TileColor', content: '#000000' },
      {
        rel: 'mask-icon',
        href: 'msapplication-TileImage',
        content: 'mstile-144x144.png',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Great+Vibes|Montserrat:400,600',
      },
    ],
    htmlAttributes: {
      lang: 'en',
    },
  },
  hotel: {
    placeId: 'ChIJZVdUezrGxokRCUImH2vOZ1U',
  },
  venue: {
    placeId: 'ChIJB5OL9jrGxokRDmSeDBOaCv0',
  },
};
