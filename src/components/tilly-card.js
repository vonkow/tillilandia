import React from 'react'
import {observer} from 'mobx-react'

@observer(['actions', 'state'])
export default class TillyCard extends React.Component {

  render () {
    const {tilly} = this.props
    return (
      <div>
        <h2>{tilly.name}</h2>
      </div>
    )
  }

}
