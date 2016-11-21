import React from 'react'
import {observer} from 'mobx-react'

@observer(['actions', 'state'])
export default class Header extends React.Component {

  render () {
    return (
      <header>
        <h1>Tillandsias</h1>
      </header>
    )
  }

}
