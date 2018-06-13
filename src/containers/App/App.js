// @flow

import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Helmet from 'react-helmet';
import Menu from 'components/Menu/Menu';
import Loading from 'components/Loading/Loading';
import RedirectWithStatus from 'components/RouterStatus/RedirectWithStatus';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import Home from '../Home';
import Event from '../Event';
import Contact from '../Contact';
import Registry from '../Registry';
import Hotel from '../Hotel';
import Watch from '../Watch';
import Rsvp from '../Rsvp';
import NotFound from '../NotFound';
import { head, paths } from '../../config';
import style from './App.scss';

const App = () => (
  <div>
    <Helmet {...head} />
    <Menu />
    <Hero />
    <div className={style.container}>
      <Switch>
        <Route path={`/${paths.home}`} component={Home} exact />
        <Route path={`/${paths.event}`} component={Event} exact />
        <Route path={`/${paths.registry}`} component={Registry} exact />
        <Route path={`/${paths.contact}`} component={Contact} exact />
        <Route path={`/${paths.rsvp}`} component={Rsvp} exact />
        <Route path={`/${paths.hotel}`} component={Hotel} exact />
        <Route path={`/${paths.watch}`} component={Watch} exact />
        <RedirectWithStatus status={302} from="/home" to={`/${paths.home}`} />
        <Route path="/shell" component={Loading} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
