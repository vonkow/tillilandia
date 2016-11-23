import React from 'react'
import {observer} from 'mobx-react'
import {Link} from 'react-router'

@observer(['actions', 'state'])
export default class AboutTillandsias extends React.Component {

  render () {
    return (
      <div>
        <h2>Tillandsias</h2>
        <p>
          ...are Bromeliads and close relatives of the pineapple. They're als less close relatives of orchids.
        </p>
      </div>
    )
  }

}
