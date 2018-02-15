// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'react-router-dom/Link';
import PageContent from '../../components/PageContent/PageContent';
import Section from '../../components/Section/Section';

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
      <p>We're working on getting ourselves registered, so stay tuned!</p>
      <p>But honestly, the most important gift you can bring to our celebration is you and your dancing shoes. We are so thrilled to spend our special day with you and so thankful to have you in our lives!</p>
    </Section>
  </PageContent>
);

export default Registry;
