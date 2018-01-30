// @flow

import React from 'react'
import Helmet from 'react-helmet'
import Link from 'react-router-dom/Link'
import PageContent from '../../components/PageContent/PageContent';
import styles from './Hotel.scss';
import { hotel } from '../../config';

// TODO:
// @see https://developers.google.com/maps/documentation/embed/guide
// Better URL generation
// include `attribution_ios_deep_link_id=comgooglemaps://?daddr`
// Restrict API Key: https://console.developers.google.com/apis/credentials?project=wedding-website-1515172845063&authuser=0

const Home = () => (
  <PageContent title="Hotel">
    <Helmet
      title="Travel"
      meta={[
        {
          name: 'description',
          content: `Traveling to the wedding`,
        },
      ]}
    />
    <iframe
      allowfullscreen
      className={styles.HotelMap}
      src={`https://www.google.com/maps/embed/v1/place?q=place_id:${hotel.placeId}&key=${process.env.GOOGLE_MAPS_API_KEY}&attribution_source=Karilynn+Joe's+Wedding&attribution_web_url=http://www.karilynnjoe.com`}
      title='Warwick Hotel Map'
    />
    <h1>Hotel</h1>
    <img src='/images/warwick-hotel-logo.png' />
    <address>
      Warwick Hotel Rittenhouse Square
      220 South 17th Street
      (17th St. between Walnut and Locust Sts.)
      Philadelphia, PA 19103
      215.735.6000
      http://www.warwickrittenhouse.com/
    </address>
  </PageContent>
)

export default Home
