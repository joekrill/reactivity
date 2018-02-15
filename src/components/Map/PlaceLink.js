// @flow

import React from 'react';
import MapLink from './MapLink';

type Props = {
  placeId: string,
  queryParams?: {},
  title: string,
};

const PlaceLink = ({
  queryParams = {},
  placeId,
  title,
  ...rest,
}: Props) => (
  <MapLink
    {...rest}
    queryParams={{
        ...queryParams,
        query: title,
        query_place_id: placeId,
    }}
    type='search'
    title={title}
  />
);

export default PlaceLink;