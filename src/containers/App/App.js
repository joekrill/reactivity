// @flow

import React from 'react'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import Helmet from 'react-helmet'
import Menu from 'components/Menu/Menu'
import Loading from 'components/Loading/Loading'
import RedirectWithStatus from 'components/RouterStatus/RedirectWithStatus'
import Home from '../Home'
import Event from '../Event'
import Registry from '../Registry'
import Hotel from '../Hotel'
import Location from '../Location'
import Rsvp from '../Rsvp'
import NotFound from '../NotFound'
import Hero from '../Hero/Hero'
import config from '../../config'
import style from './App.scss'

const App = () => (
  <div>
    <Helmet {...config.head} />
    <Menu />
    <Hero />
    <div className={style.container}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/wedding" component={Event} exact />
        {/* <Route path="/registry" component={Registry} exact />
        <Route path="/rsvp" component={Rsvp} exact /> */}
        <Route path="/hotel" component={Hotel} exact />
        <Route path="/philly" component={Location} exact />
        <RedirectWithStatus status={302} from="/home" to="/" />
        <Route path="/shell" component={Loading} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
