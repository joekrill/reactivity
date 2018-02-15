// @flow

import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import style from './Menu.scss';
import couple from './kissing_couple.svg';
import { paths, menu } from '../../config';

const Menu = () => (
  <nav className={style.nav}>
    <div className={style.nav__logo}>
      <NavLink
        to="/"
        className={style.link}
        activeClassName={style.activeLink}
        exact
      >
        <img src={couple} className={style.nav__logo_image} alt="Home" />
      </NavLink>
    </div>
    <div className={style.nav__menu}>
      {menu.order.map(menuItem => (
        <NavLink
          key={menuItem}
          to={`/${paths[menuItem]}`}
          className={style.link}
          activeClassName={style.activeLink}
          exact
        >
          {menu.labels[menuItem]}
        </NavLink>
      ))}      
    </div>
  </nav>
);

export default Menu;
