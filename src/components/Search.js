import React, { Component } from 'react'
import './Search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class HeaderSearch extends Component {
    render() {
        return (
            <div className="search-wrap">
                <div className="search">
                    <i className="icon-search">
                        <FontAwesomeIcon icon="search" />
                    </i>
                    <input type="text" placeholder={this.props.placeholder} />
                    <i className="icon-clear">
                        <FontAwesomeIcon icon="times-circle" />
                    </i>
                </div>
            </div>
        )
    }
}