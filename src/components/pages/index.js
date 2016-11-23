import React from 'react'
import {observer} from 'mobx-react'
import {Link} from 'react-router'

@observer(['actions', 'state'])
export default class Page extends React.Component {

  render () {
    return (
      <div>
        <article>
          <nav>
            <Link to="/pages/site" activeClassName="active">
              About
            </Link>
            <Link to="/pages/tillandsias" activeClassName="active">
              Tillandsias
            </Link>
            <Link to="/pages/care" activeClassName="active">
              Care
            </Link>
            <Link to="/pages/caz" activeClassName="active">
              Caz
            </Link>
          </nav>
          {this.props.children}
        </article>
        <Link to="/" className="back">&lt;&lt;&lt;</Link>
      </div>
    )
  }

}
