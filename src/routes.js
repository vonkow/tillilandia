import React from 'react'
import {Route, IndexRoute, IndexRedirect} from 'react-router'
import App from './components/app'
import Index from './components'
import TillyDetail from './components/tilly-detail'

export default function createRoutes() {
  return (
    <Route component={App}>
      <Route path="/" component={Index}/>
      <Route path="/tilly/:id" component={TillyDetail}/>
    </Route>
  )
}
