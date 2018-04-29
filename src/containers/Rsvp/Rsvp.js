// @flow

import React from 'react';
import Helmet from 'react-helmet';
import PageContent from '../../components/PageContent/PageContent';
import Section from '../../components/Section/Section';
import RsvpForm from './RsvpForm';

const RSVP = () => (
  <PageContent title="RSVP">
    <Helmet
      title="RSVP"
      meta={[
        {
          name: 'description',
          content: `RSVP`,
        },
      ]}
    />
    <Section>
      <RsvpForm />
    </Section>
  </PageContent>
);

export default RSVP;
