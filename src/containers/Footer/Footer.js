// @flow

import React from 'react';
import style from './Footer.scss';

const Footer = () => (
  <div className={style.Footer}>
    <ul className={style.Footer__attributions}>
      <li><a href="https://www.toptal.com/designers/subtlepatterns/symphony/">"Symphony" header background pattern by Irfan iLias</a> is licensed under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY-SA 3.0</a></li>
      <li><a href="https://hiddencityphila.org/2017/02/colonial-dames-yes-still-active-and-growing-on-latimer-street/">Colonial Dames Society Photo</a> courtesy of Michael Bixler, <a href="https://hiddencityphila.org">Hidden City Philadelphia</a></li>
    </ul>
  </div>
);

export default Footer;
