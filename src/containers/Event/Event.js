// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'react-router-dom/Link';
import PageContent from '../../components/PageContent/PageContent';
import Section from '../../components/Section/Section';
import Place from '../../components/Map/Place';
import Directions from '../../components/Map/Directions';
import PlaceLink from '../../components/Map/PlaceLink';
import Photo from '../../components/Photo/Photo';
import styles from './Event.scss';
import { venue, hotel } from '../../config';

const EventPage = () => (
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
      <Section>
        <h3>When &amp; Where</h3>
        <time dateTime='2018-06-16'>Saturday, June 16th, 2018, time TBA (~5ish)</time>

        <p>
          Our ceremony and reception (immediately following) will both be held at{' '}
          <a href="https://www.nscdapa.org">The Colonial Dames Society</a> located at{' '}
          <PlaceLink placeId={venue.placeId} title='The Colonial Dames Society'>1630 Latimer Street in Philadelphia, PA 19103</PlaceLink>{' '}
          (between 16th &amp; 17th Sts. and Spruce &amp; Locust Sts.) {' '}
          You'll be looking for a brick building with yellow window frames and green shutters (right around the corner from the Black Sheep Pub).
        </p>
        <div className={styles.VenuePhoto}>
          <img className={styles.VenuePhoto__Image} src='/images/colonial_dames_building.jpg' alt="The Colonial Dames Society" />
          <span className={styles.VenuePhoto__Caption}>Photo courtesy of Michael Bixler, <a href="https://hiddencityphila.org">Hidden City Philadelphia</a></span>
        </div>

        <p>
          There is an outdoor garden area where, weather permitting, we hope to have our ceremony and cocktails.
        </p>
      </Section>

      <Section>
        <h3>What to wear</h3>
        <p>
          We're asking guests to wear cocktail attire.{' '}
          For guys that's typically a suit and tie; for gals, a nice dress or something - your typical wedding garb (you know the drill.){' '}
          You can always <a href='https://www.google.com/search?q=wedding+cocktail+attire'>ask The Google</a> if you're not sure.
        </p>
        <p>
          Also keep in mind that we hope to have our ceremony and cocktails outdoors, assuming the weather cooperates.
        </p>
      </Section>

      <Section>
        <h3>Directions from <Link to='/hotel'>The Warwick Hotel</Link></h3>
        <Directions
          mode='walking'
          originId={hotel.placeId}
          destinationId={venue.placeId}
          title='The Colonial Dames Society'
          queryParams={{ zoom: 17 }}
        />
        <p>The Colonial Dames Society is a <i>very</i> short walk (~1/10th of a mile) from the Warwick Hotel:</p>
        <ol>
          <li>Leaving the main hotel entrance turn right onto 17th Street heading south.</li>
          <li>Walk 1/2 block to Locust Street, cross both Locust and 17th Street.</li>
          <li>Continue walking another 1/2 block south and turn left onto Latimer Street.</li>
          <li>The Colonial Dames Society will be on your right - a red brick building with green shutters.</li>
        </ol>
        <p>
          Because of the proximity, no transportation will be provided.{' '}
          If you need additional arrangements or have questions please don't hesistate to <Link to="/contact">let us know</Link>!</p>
      </Section>

      <Section>
        <h3>Parking / From out of town</h3>
        <p>
          We suggest using google maps for driving direction to a nearby parking garages, then walking to the venue from there.{' '}
          There are a few parking garages within a block or 2 of the venue:
        </p>
        <ul className={styles.ParkingList}>
          <li className={styles.ParkingList__item}>
            <div className={styles.ParkingList__title}>
              <h4 className={styles.ParkingList__name}>Town Garage</h4> 
              <span className={styles.ParkingList__cost}>($17 - $23)</span>
            </div>
            <p className={styles.ParkingList__description}>
              We recomend Town Garage at <PlaceLink placeId="ChIJewz4wzrGxokRW6VQh6rAc5k" title='Town Garage'>1524 Latimer Street</PlaceLink>{' '}
              because it's the closest parking to the venue and has the lowest rates.{' '}
              Enter on the south side of Latimer Street between 15th &amp; 16th Streets.{' '}
              From there, walk one block west on Latimer to reach The Colonial Dames Society.{' '}
            </p>
            <div className={styles.ParkingList__map}>
              <Place
                placeId='ChIJewz4wzrGxokRW6VQh6rAc5k'
                title='Town Garage'
              />
            </div>
          </li>
          <li className={styles.ParkingList__item}> 
            <div className={styles.ParkingList__title}>
              <h4 className={styles.ParkingList__name}>The Acadamy House</h4>
              <span className={styles.ParkingList__cost}>($20 - $23)</span> 
            </div>
            <p className={styles.ParkingList__description}>
              This condominium building has an underground parking garage at{' '}
              <PlaceLink placeId="NCXGxokROq4cHSfYDbI" title='Acadamy House Parking'>251 S. 15th Street</PlaceLink>, two blocks from the venue.{' '}
              The entrance is on the east side of 15th Street between Spruce &amp; Locust Streets.{' '}
              From there head 2 blocks west on Latimer Street to reach The Colonial Dames Society.
            </p>
            <div className={styles.ParkingList__map}>
              <Place
                placeId='ChIJ3aN-NCXGxokROq4cHSfYDbI'
                title='Acadamy House Parking'
              />
            </div>
          </li>
          <li className={styles.ParkingList__item}>
            <div className={styles.ParkingList__title}>
              <h4 className={styles.ParkingList__name}>1500 Locust</h4> 
              <span className={styles.ParkingList__cost}>($28 - $32)</span>
            </div>
            <p className={styles.ParkingList__description}>
              Located <PlaceLink placeId='ChIJ-03tyTrGxokRsTtpS6GLTz4' title='1500 Locust Street'>between 15th &amp; 16th on Locust Street</PlaceLink>,{' '}
              this garage is just around the corner from the venue -{' '}
              next to Cinder and Fado, and across the street from Misconduct Tavern.{' '}
              Enter on the south side of Locust Street.{' '}
              To get to the venue from here, head west, cross and turn left on to 16th Street,{' '} 
              walk a half of a block to turn right onto Latimer Street, and the Colonial Dames Society will be at the end of the block on your left.
            </p>
            <div className={styles.ParkingList__map}>
              <Place
                placeId='ChIJ-03tyTrGxokRsTtpS6GLTz4'
                title='1500 Locust Street'
              />
            </div>
          </li>
      </ul>
      </Section>

    </div>
  </PageContent>
);

export default EventPage;
