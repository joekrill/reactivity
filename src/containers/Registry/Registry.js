// @flow

import React from 'react';
import Helmet from 'react-helmet';
import PageContent from '../../components/PageContent/PageContent';
import Section from '../../components/Section/Section';
import CrateAndBarrelLogo from './CrateAndBarrelLogo';
import BedBathAndBeyondLogo from './BedBathAndBeyondLogo';
import styles from './Registry.scss';

const Registry = () => (
  <PageContent title="Registry">
    <Helmet
      title="Registry Information"
      meta={[
        {
          name: 'description',
          content: `Wedding registry information`,
        },
      ]}
    />
    <Section>
      <ul className={styles.registryList}>
        <li>
          <a href="https://www.crateandbarrel.com/gift-registry/karilynn-bayus-and-joe-krill/r5846839">
            <CrateAndBarrelLogo />
          </a>
        </li>
        <li>
          <a href="https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=545922754&eventType=Wedding&pwsurl=">
            <BedBathAndBeyondLogo />
          </a>
        </li>
      </ul>
    </Section>
  </PageContent>
);

export default Registry;
