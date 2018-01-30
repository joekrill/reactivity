// @flow

import React from 'react'
import Helmet from 'react-helmet'
import Link from 'react-router-dom/Link'
import photo from '../../components/Photos/img_0408.jpg'
import style from './Home.scss'
import Photo from '../../components/Photo/Photo';
import PageContent from '../../components/PageContent/PageContent';

const Home = () => (
  <PageContent title="We're getting married!">
    <Photo className={style.Photo} src={photo} alt="Us" />
  </PageContent>
)

export default Home
