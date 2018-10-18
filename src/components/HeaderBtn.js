import React, { Component } from 'react'
import './HeaderBtn.scss'
// import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class HeaderBtn extends Component {
    render() {
        return (
            <div className="header-btn">
              <button type="button" title={this.props.title} className="btn btn-outline">
                <i>
                  <FontAwesomeIcon icon={this.props.icon} />
                </i>
              </button>
            </div>
        )
    }
}