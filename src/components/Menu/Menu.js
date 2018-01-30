// @flow

import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import style from './Menu.scss';
import couple from '../../../static/images/noun_804505.svg';

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
      <NavLink
        to="/"
        className={style.link}
        activeClassName={style.activeLink}
        exact
      >
        Home
      </NavLink>
      <NavLink
        to="/wedding"
        className={style.link}
        activeClassName={style.activeLink}
        exact
      >
        Wedding
      </NavLink>
      {/* <NavLink
        to="/registry"
        className={style.link}
        activeClassName={style.activeLink}
        exact
      >
        Registry
      </NavLink>
      <NavLink
        to="/rsvp"
        className={style.link}
        activeClassName={style.activeLink}
        exact
      >
        RSVP
      </NavLink> */}
      <NavLink
        to="/hotel"
        className={style.link}
        activeClassName={style.activeLink}
        exact
      >
        Hotel
      </NavLink>
      <NavLink
        to="/philly"
        className={style.link}
        activeClassName={style.activeLink}
        exact
      >
        Philadelphia
      </NavLink>
    </div>
  </nav>
);

export default Menu;
