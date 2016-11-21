import React from 'react'
import {observer} from 'mobx-react'
import {find} from 'lodash'

@observer(['actions', 'state'])
export default class TillyCard extends React.Component {

  render () {
    // TODO get if not existant and back button
    const tilly = find(this.props.state.tillys, {
      id: this.props.params.id
    })
    return (
      <div className="tilly-detail everything">
        <h1>{tilly.name}</h1>
        <h2>{tilly.species}</h2>
        <p>{tilly.description}</p>
        <img src={tilly.pics[0].image}/>
      </div>
    )
  }

}
