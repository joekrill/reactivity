// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'react-router-dom/Link';
import PageContent from '../../components/PageContent/PageContent';
import Section from '../../components/Section/Section';
import EmailUsLink from './EmailUsLink';
import { contact } from '../../config';

const Contact = () => (
  <PageContent title="Contact Us">
    <Helmet
      title="Contact Us"
      meta={[
        {
          name: 'description',
          content: `Contact Us`,
        },
      ]}
    />
    <Section>
      Please email us at <EmailUsLink /> if you need to get in touch for any reason!
    </Section>
  </PageContent>
);

export default Contact;
