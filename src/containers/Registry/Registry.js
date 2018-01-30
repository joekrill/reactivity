// @flow

import React from 'react'
import Helmet from 'react-helmet'
import Link from 'react-router-dom/Link'
import PageContent from '../../components/PageContent/PageContent';

const Home = () => (
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
  </PageContent>
)

export default Home
