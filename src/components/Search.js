import React, { Component } from 'react'
import './Search.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Search extends Component {
    render() {
        return (
            <div className="m-search-wrap">
                <div className="m-search">
                    <i className="icon-search">
                        <FontAwesomeIcon className="icon" icon="search" />
                    </i>
                    <input type="text" placeholder={this.props.placeholder} />
                    <i  className="icon-clear">
                        <FontAwesomeIcon icon="times-circle" />
                    </i>
                </div>
            </div>
        )
    }
}