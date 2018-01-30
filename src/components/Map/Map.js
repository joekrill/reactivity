// @flow

import React from 'react'
import styles from './Map.scss'

const Map = ({
  placeId,
  title,
}) => (
  <iframe
    allowFullScreen
    className={styles.Map}
    src={`https://www.google.com/maps/embed/v1/place?q=place_id:${placeId}&key=${process.env.GOOGLE_MAPS_API_KEY}&attribution_source=Karilynn+Joe's+Wedding&attribution_web_url=http://www.karilynnjoe.com`}
    title={title}
  />
)

export default Map
