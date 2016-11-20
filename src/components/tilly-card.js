import React from 'react'
import {observer} from 'mobx-react'

@observer(['actions', 'state'])
export default class TillyCard extends React.Component {

  render () {
    const {tilly} = this.props
    let pic = null
    if (tilly.pics.length) {
      pic = <img className="tilly-thumb" src={tilly.pics[0].image}/>
    }
    return (
      <div>
        <h2>{tilly.name}</h2>
        {pic}
      </div>
    )
  }

}
