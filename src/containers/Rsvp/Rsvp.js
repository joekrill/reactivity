// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'react-router-dom/Link';
import PageContent from '../../components/PageContent/PageContent';
import Section from '../../components/Section/Section';

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
      Once we have our invitations sent out we'll allow folks to RSVP online. Check back then!
    </Section>
  </PageContent>
);

export default RSVP;
