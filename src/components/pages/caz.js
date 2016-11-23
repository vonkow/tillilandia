import React from 'react'
import {observer} from 'mobx-react'
import {Link} from 'react-router'

@observer(['actions', 'state'])
export default class AboutCaz extends React.Component {

  render () {
    return (
      <div>
        <h2>Caz!</h2>
        <p>Has to fill this out</p>
      </div>
    )
  }

}
