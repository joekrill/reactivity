// @flow

import React from 'react';
import querystring from 'querystring';
import styles from './Map.scss';

const BASE_URL = 'https://www.google.com/maps/embed/v1';

const BASE_PARAMS = {
  key: process.env.GOOGLE_MAPS_API_KEY,
};

type Props = {
  queryParams: {},
  title?: string,
  type: 'place' | 'directions' | 'search' | 'view' | 'streetview',
};

const Map = ({
  type,
  queryParams,
  title,
}: Props) => (
  <iframe
    allowFullScreen
    className={styles.Map}
    src={`${BASE_URL}/${type}?${querystring.stringify({ ...BASE_PARAMS, ...queryParams })}`}
    title={title}
  />
);

export default Map;
