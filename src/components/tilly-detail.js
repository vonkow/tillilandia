import React from 'react'
import {observer} from 'mobx-react'
import {find} from 'lodash'

@observer(['actions', 'state'])
export default class TillyCard extends React.Component {

  render () {
    const tilly = find(this.props.state.tillys, {
      id: this.props.params.id
    })
    return (
      <h1>{tilly.name}</h1>
    )
  }

}
