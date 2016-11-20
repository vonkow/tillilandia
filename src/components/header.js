import React from 'react'
import {observer} from 'mobx-react'

@observer(['actions', 'state'])
export default class Header extends React.Component {

  render () {
    return (
      <h1>Am the header</h1>
    )
  }

}
