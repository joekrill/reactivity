// @flow

import React from 'react';
import classnames from 'classnames';
import style from './Photo.scss';

type Props = {
  alt: string,
  className: string,
};

const Photo = ({ alt, className, ...props }: Props) => (
  <img alt={alt} className={classnames(style.Photo, className)} {...props} />
);

export default Photo;
