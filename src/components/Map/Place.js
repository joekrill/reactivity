// @flow

import React from 'react';
import Map from './Map';

const BASE_PARAMS = {
  attribution_source: 'Karilynn & Joe\'s Wedding',
  attribution_web_url: 'http://www.karilynnjoe.com',
};

type Props = {
  placeId: string,
  queryParams?: {},
};

const Place = ({
  queryParams,
  placeId,
  ...rest,
}: Props) => (
  <Map
    {...rest}
    queryParams={{ ...BASE_PARAMS, ...queryParams, q: `place_id:${placeId}` }}
    type='place'
  />
);

export default Place;
