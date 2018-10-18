import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MenuGroup.scss'

export default class MenuGroup extends Component {
    render() {
        return (
            <div className='menu-group'>
                <h3 className="menu-group-title">{this.props.title}</h3>
                {this.props.children}
            </div>
        )
    }
}

MenuGroup.propTypes = {
    title: PropTypes.string.isRequired,
}