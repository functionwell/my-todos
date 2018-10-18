import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MenuItem.scss'
import MenuIcon from './MenuIcon'
import menuItemTypes from './menuItemTypes'

export default class MenuItem extends Component {
    render() {
        return (
            <div className="menu-item">
                <MenuIcon type={this.props.type} icon={this.props.type} bordered={menuItemTypes.find(item => item.type === this.props.type).bordered} />
                <span className="name">{this.props.name}</span>
                <span className="count">{this.props.count}</span>
            </div>
        )
    }
}

MenuItem.propTypes = {
    type: PropTypes.oneOf(menuItemTypes.map(item => item.type)).isRequired,
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
}