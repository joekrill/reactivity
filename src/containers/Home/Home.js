// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Link from 'react-router-dom/Link';
import style from './Home.scss';
import Photo from '../../components/Photo/Photo';
import PageContent from '../../components/PageContent/PageContent';

const Home = () => (
  <PageContent title="We're getting married!">
    <div className={style.PhotoWrapper}>
      <Photo className={style.Photo} src='/photos/img_0408.jpg' alt="Us" />
    </div>
  </PageContent>
);

export default Home;
