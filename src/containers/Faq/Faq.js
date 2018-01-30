// @flow

import React from 'react'
import Helmet from 'react-helmet'
import Link from 'react-router-dom/Link'
import PageContent from '../../components/PageContent/PageContent';

const Home = () => (
  <PageContent title="Questions">
    <Helmet
      title="Questions"
      meta={[
        {
          name: 'description',
          content: `Frequently asked questions`,
        },
      ]}
    />
    <dl>
      <dt>Children</dt>
      <dd>Per the limits at our venue we will we not be able to have children attend.</dd>

    </dl>
  </PageContent>
)

export default Home
