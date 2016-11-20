import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'mobx-react'
import {Router, RouterContext, hashHistory} from 'react-router'

import State from './state'
import Actions from './actions'
import createRoutes from './routes'

const state = new State()
const actions = new Actions(state)
const context = {state, actions}

function createElement (props) {
  return (
    <Provider router={hashHistory} {...context}>
      <RouterContext {...props}/>
    </Provider>
  )
}

actions.getAllTillys()

render(
  <Router
    history={hashHistory}
    render={createElement}
    routes={createRoutes()}
  />, document.getElementById('app')
)
