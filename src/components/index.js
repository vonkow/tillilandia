import React from 'react'
import {observer} from 'mobx-react'

@observer(['actions', 'state'])
export default class Index extends React.Component {

  setFooToBaz () {
    this.props.actions.setFoo('BAZ')
  }

  render () {
    const {state} = this.props
    const tillys = state.tillys.map(tilly => {
      return (
        <p key={tilly.id}>{tilly.name}</p>
      )
    })
    
    return (
      <div className="index">
        <p>AM Index</p>
        <p>{state.foo}</p>
        <button onClick={this.setFooToBaz.bind(this)}>BAZify foo</button>
        {tillys}
      </div>
    )
  }

}
