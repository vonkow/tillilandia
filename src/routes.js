import React from 'react'
import {Route, IndexRoute, IndexRedirect} from 'react-router'
import App from './components/app'
import Index from './components'
import Page from './components/pages'
import AboutCare from './components/pages/care'
import AboutCaz from './components/pages/caz'
import AboutTillandsias from './components/pages/tillandsias'
import AboutSite from './components/pages/site'
import TillyDetail from './components/tilly-detail'

export default function createRoutes() {
  return (
    <Route component={App}>
      <Route path="/" component={Index}/>
      <Route path="/pages" component={Page}>
        <IndexRedirect to="/pages/site"/>
        <Route path="care" component={AboutCare}/>
        <Route path="caz" component={AboutCaz}/>
        <Route path="tillandsias" component={AboutTillandsias}/>
        <Route path="site" component={AboutSite}/>
      </Route>
      <Route path="/tilly/:id" component={TillyDetail}/>
    </Route>
  )
}
