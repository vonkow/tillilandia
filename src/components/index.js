import React from 'react'
import {observer} from 'mobx-react'
import TillyCard from './tilly-card'

@observer(['actions', 'state'])
export default class Index extends React.Component {

  render () {
    const {state} = this.props
    const tillys = state.tillys.map(tilly => 
      <TillyCard tilly={tilly} key={tilly.id}/>
    )
    return (
      <div className="index">
        <div className="listy">
          {tillys}
        </div>
      </div>
    )
  }

}
