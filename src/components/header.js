import React from 'react'
import {observer} from 'mobx-react'
import {Link} from 'react-router'

@observer(['actions', 'state'])
export default class Header extends React.Component {

  render () {
    return (
      <header>
        <h1>Tillandsias</h1>
        <h3>
          <Link to="pages">
            What?
          </Link>
        </h3>
      </header>
    )
  }

}
