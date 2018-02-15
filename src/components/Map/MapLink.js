// @flow

import React from 'react';
import querystring from 'querystring';

const BASE_URL = 'https://www.google.com/maps';

const BASE_PARAMS = {
  api: 1,
};

type Props = {
  queryParams: {},
  type?: 'search' | 'dir',
};

const MapLink = ({
  queryParams,
  type = 'search',
  ...rest,
}: Props) => (
  <a 
    {...rest}
    href={`${BASE_URL}/${type}/?${querystring.stringify({ ...BASE_PARAMS, ...queryParams })}`}
  />
);

export default MapLink;
