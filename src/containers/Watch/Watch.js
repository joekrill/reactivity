// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { stream } from '../../config';

import PageContent from '../../components/PageContent/PageContent';
import Section from '../../components/Section/Section';
import styles from './Watch.scss';

const Hotel = () => (
  <PageContent title="Live Stream">
    <Helmet
      title="Live Stream"
      meta={[
        {
          name: 'description',
          content: `Watch Live`,
        },
      ]}
    />
    <Section>
      <div className={styles.Wrapper}>
        <iframe
          allow="autoplay; encrypted-media"
          allowFullScreen
          className={styles.Frame}
          frameBorder="0"
          src={`https://www.youtube.com/embed/${stream.eventId}`}
          title="Watch Live"
          width="640"
          height="360"
        />
      </div>
    </Section>
  </PageContent>
);

export default Hotel;
