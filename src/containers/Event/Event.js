// @flow

import React from 'react'
import Helmet from 'react-helmet'
import Link from 'react-router-dom/Link'
import PageContent from '../../components/PageContent/PageContent';
import Map from '../../components/Map/Map';
import styles from './Event.scss';
import { venue } from '../../config';

const Home = () => (
  <PageContent title="Ceremony and Reception">
    <Helmet
      title="Ceremony and Reception"
      meta={[
        {
          name: 'description',
          content: `Wedding schedule, venue, and other details`,
        },
      ]}
    />
    <div>
      <div>
        Our ceremony and reception will be held on
        <time dateTime='2018-06-16' className=''>Saturday, June 16th, 2018 (time TBA)</time>
        at <a href='https://partyspace.com/philadelphia/venue/colonial-dames-pa-headquarters'>The Colonial Dames Society</a>
      </div>
      <h3>Venue</h3>
      <h4>The Colonial Dames Society</h4>
      <address>
        1630 Latimer Street, Philadelphia, PA 19103
        (Between 16th &amp; 17th Sts. and Spruce and Locust Sts)
        <a href="tel:215-735-6737">215-735-6737</a>
      </address>
      <Map
        placeId={venue.placeId}
        title='The Colonial Dames Society'
      />
      <h3>Transportation</h3>

      {/* <dl>
        <dt>What</dt>
        <dd>The happy couple will say “I do” with their toes in the sand at 5pm at Central Beach in Coronado, CA. Facing the ocean, the ceremony will be held where RH Dana Place meets Ocean Boulevard (to the right of the Hotel Del Coronado villas), where there is a line of palm trees in the sand heading towards the water. Guests may park at any available street parking.
  </dd>
        <dt>When</dt>
        <dd>Saturday, June 16th, Time TBA</dd>
        <dt>Where</dt>
        <dd>
          <address>
            The Colonial Dames Society
            (The National Society of The Colonial Dames of America in the Commonwealth of Pennsylvania)
            1630 Latimer Street, Philadelphia, PA 19103
          </address>
        </dd>
        <dt>Attire</dt>
        <dd>Clothes of some sort</dd>
        <dt>Transportation</dt>
        <dd>No transportation will be provided, but it is a very short walk from the hotel:</dd>
        <dt>Parking</dt>
        <dd>??</dd>
      </dl> */}
    </div>
  </PageContent>
)

export default Home
