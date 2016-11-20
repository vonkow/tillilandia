import React from 'react'
import {Route, IndexRoute, IndexRedirect} from 'react-router'
import App from './components/app'
import Index from './components'

export default function createRoutes() {
  return (
    <Route component={App}>
      <Route path="/" component={Index}/>
    </Route>
  )
}
