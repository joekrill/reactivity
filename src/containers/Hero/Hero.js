// @flow

import React from 'react';
import style from './Hero.scss';
import heart from './heart.svg';

const Hero = () => (
  <div className={style.Hero}>
    <h1 className={style.Hero__title}>Karilynn &amp; Joe</h1>
    <h2 className={style.Hero__subtitle}>
      <span className={style.Hero__city}>Philadelphia, PA, USA</span>
      <span className={style.Hero__date}>June 16th, 2018</span>
    </h2>
  </div>
);

export default Hero;
