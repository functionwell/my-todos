import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TodoExpand.scss'
// import classNames from 'classnames'


export default class Todo extends Component {
    state = {
        isChecked: true,
    };

    handleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
    }

    render() {
        return (
            <div></div>
        )
    }
}