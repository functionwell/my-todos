import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MenuIcon.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import menuItemTypes from './menuItemTypes'
import classNames from 'classnames'

export default class MenuIcon extends Component {

    render() {
        const item = menuItemTypes.find(item => item.type === this.props.type)
        return (
            <React.Fragment>
                <i className={classNames({ 'menu-icon': true, [`icon-${item.type}`]: true, 'icon-bordered': item.bordered })}>
                    {item.icon ? <FontAwesomeIcon icon={item.icon} /> : null}
                </i>
            </React.Fragment>
        )
    }
}

MenuIcon.propTypes = {
    type: PropTypes.oneOf(menuItemTypes.map(item => item.type)).isRequired,
}