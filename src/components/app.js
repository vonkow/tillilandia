import React from 'react'
import {observer} from 'mobx-react'
import Header from './header'

@observer(['actions', 'state'])
export default class App extends React.Component {

  render () {
    return (
      <div>
        <Header {...this.props}/>
        {this.props.children}
      </div>
    )
  }

}
