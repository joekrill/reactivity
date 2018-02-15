// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'react-router-dom/Link';
import PageContent from '../../components/PageContent/PageContent';
import Section from '../../components/Section/Section';
import styles from './Hotel.scss';
import { hotel } from '../../config';
import Place from '../../components/Map/Place';
import PlaceLink from '../../components/Map/PlaceLink';

const Hotel = () => (
  <PageContent title="Hotel">
    <Helmet
      title="Travel"
      meta={[
        {
          name: 'description',
          content: `Accommodations for the wedding`,
        },
      ]}
    />
    <Section>
      <p>
        <img className={styles.HotelLogo} src='/images/warwick-hotel-logo.png' />
        For out of town guests, we've held a block of rooms at The Warwick Hotel. It's right in the heart of the{' '}
        Rittenhouse Square neighborhood of Philadelphia and just one block from our wedding venue.{' '}
        The address for The Warwick is <PlaceLink placeId={hotel.placeId} title="The Warwick Hotel">220 South 17th Street, Philadelphia, PA 19103</PlaceLink> and their phone number
        is <a href="tel:215-735-6000">215-735-6000</a>.
      </p>

      <p>
        For the discounted rate, please reserve through <a href={hotel.bookingUrl}>this special link</a>.
      </p>
      <Place
        placeId={hotel.placeId}
        title='The Warwick Hotel'
      />
    </Section>
  </PageContent>
);

export default Hotel;
