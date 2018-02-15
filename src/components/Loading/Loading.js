// @flow

import React from 'react';
import styles from './Loading.scss';
import Banner from '../Banner/Banner'

const Loading = () => (
  <div>
    <Banner />
    <div className={styles.Loading__wrapper}>
    <div className={styles.Loading__bar} /> 
    </div>
  </div>
);

export default Loading
