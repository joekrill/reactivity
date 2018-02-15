// @flow

import React from 'react';
import type { Node } from 'react';
import style from './Banner.scss';

type Props = {
  children: Node,
};

const Banner = ({ children }: Props) => (
  <h3 className={style.Banner}>
    <span className={style.Banner_content}>{children}</span>
  </h3>
);

export default Banner;
