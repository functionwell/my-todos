import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TodoList.scss'
// import classNames from 'classnames'
import Todo from './Todo'
// import TodoExpand from './TodoExpand'

export default class TodoList extends Component {
    render() {
        return (
            <div className='todo-list'>
                {this.props.todos.map((item,index) => 
                    <Todo key={index} {...item} />
                )}
            </div>
        )
    }
}