import React, { Component } from 'react'
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Search extends Component {
    render() {
        return (
            <div className="m-search">
                {/* <i className="iconfont icon-search"></i> */}
                <FontAwesomeIcon icon="search" />
                <input type="text" placeholder={this.props.placeholder} />
                {/* <i className="iconfont icon-clear"></i> */}
                <FontAwesomeIcon icon="times-circle" />
            </div>
        )
    }
}