// @flow

import React from 'react';
import type { Node } from 'react'
import style from './PageContent.scss';
import Banner from '../Banner/Banner';

type Props = {
  children: Node,
  title: Node,
};

const PageContent = (props: Props) => (
  <div className={style.PageContent}>
    {props.title && (<Banner>{props.title}</Banner>)}
    <div className={style.PageContent__content}>{props.children}</div>
  </div>
);

export default PageContent;
