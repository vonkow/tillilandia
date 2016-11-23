import React from 'react'
import {observer} from 'mobx-react'
import {Link} from 'react-router'

@observer(['actions', 'state'])
export default class AboutCare extends React.Component {

  render () {
    return (
      <div>
        <h2>Care</h2>
        <p>
          Allow me to chew your ear off about how to take care of tillys, when I have a moment.
        </p>
      </div>
    )
  }

}
