// @flow

import React from 'react';
import type { Node } from 'react'
import style from './PageContent.scss';

type Props = {
  children: Node,
  title: Node,
}

const PageContent = (props: Props) => (
  <div className={style.PageContent}>
    {props.title && (
      <h3 className={style.PageContent__title}>
        <span className={style.PageContent__title_content}>{props.title}</span>
      </h3>
    )}
    <div className={style.PageContent__content}>{props.children}</div>
  </div>
);

export default PageContent;
