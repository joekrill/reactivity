// @flow

import React from 'react'
import Helmet from 'react-helmet'
import Link from 'react-router-dom/Link'
import PageContent from '../../components/PageContent/PageContent';

const Home = () => (
  <PageContent title="Philadelphia">
    <Helmet
      title="Location"
      meta={[
        {
          name: 'description',
          content: `Welcome to Philadelphia`,
        },
      ]}
    />
    <h1>Philadelphia</h1>
  </PageContent>
)

export default Home
