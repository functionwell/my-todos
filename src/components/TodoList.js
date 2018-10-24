import React, {Component} from 'react'
// import PropTypes from 'prop-types'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TodoList.scss'
// import classNames from 'classnames'
import Todo from './Todo'
import TodoExpand from './TodoExpand'

export default class TodoList extends Component {
    render() {
        return (
            <div className='todo-list'>
                {this.props.todos.map((item, index) =>
                    item.isExpand ?
                        <TodoExpand key={index}
                                    {...item}
                                    shrinkTodo={this.props.shrinkTodo}
                                    activeTodo={this.props.activeTodo}
                                    editTodo={this.props.editTodo}
                                    checkTodo={this.props.checkTodo}/>
                        :
                        <Todo key={index}
                              {...item}
                              expandTodo={this.props.expandTodo}
                              activeTodo={this.props.activeTodo}
                              checkTodo={this.props.checkTodo}/>
                )}
            </div>
        )
    }
}