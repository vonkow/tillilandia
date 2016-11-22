import React from 'react'
import {Route, IndexRoute, IndexRedirect} from 'react-router'
import App from './components/app'
import Index from './components'
import About from './components/about'
import TillyDetail from './components/tilly-detail'

export default function createRoutes() {
  return (
    <Route component={App}>
      <Route path="/" component={Index}/>
      <Route path="/about" component={About}/>
      <Route path="/tilly/:id" component={TillyDetail}/>
    </Route>
  )
}
