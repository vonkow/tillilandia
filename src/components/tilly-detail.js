import React from 'react'
import {observer} from 'mobx-react'
import {Link} from 'react-router'
import {find} from 'lodash'

@observer(['actions', 'state'])
export default class TillyCard extends React.Component {

  render () {
    // TODO get if not existant and back button
    const tilly = find(this.props.state.tillys, {
      id: this.props.params.id
    })
    if (!tilly) {
      return <div className="loading" />
    } else {
      return (
        <div className="tilly-detail everything">
          <div className="detail-header">
            <h2>{tilly.name}</h2>
            <h3>T. {tilly.species}</h3>
          </div>
          <p>{tilly.description}</p>
          <div className="img-wrap">
            <img src={tilly.pics[0].image}/>
          </div>
          <Link to="/" className="back">&lt;&lt;&lt;</Link>
        </div>
      )
    }
  }

}
