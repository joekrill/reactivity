// @flow

import React from 'react';
import classnames from 'classnames';
import style from './Section.scss';

type Section = {
  className: string,
}

const Section = ({ alt, className, ...props }: Props) => (
  <div className={classnames(style.Section, className)} {...props} />
);

export default Section;
