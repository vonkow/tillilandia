import React from 'react'
import {observer} from 'mobx-react'

@observer(['actions', 'state'])
export default class TillyCard extends React.Component {

  render () {
    const {tilly} = this.props
    let image = null,
        className = ''
    if (tilly.pics.length) {
      image = tilly.pics[0]
      if (image.height > image.width) {
        className = 'portrait'
      }
    }
    return (
      <div className="tilly-thumb">
        <div className="thumbnail">
          <img src={image.image} className={className}/>
          <h4>{tilly.name}</h4>
        </div>
      </div>
    )
  }

}
