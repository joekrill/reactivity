// @flow

import React from 'react';
import Map from './Map';


type Props = {
  destinationId: string,
  originId: string,
  mode?: 'walking' | 'driving' | 'bicycling' | 'transit' | 'flying',
  queryParams: {},
};

const Directions = ({
  mode = 'walking',
  originId,
  destinationId,
  queryParams = {},
  ...rest,
}: Props) => (
  <Map
    {...rest}
    queryParams={{
      ...queryParams,
      origin: `place_id:${originId}`,
      destination: `place_id:${destinationId}`,
      mode,
    }}
    type='directions'
  />
);

export default Directions;
