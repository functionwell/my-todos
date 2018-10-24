import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Todo.scss'
import classNames from 'classnames'

export default class Todo extends Component {

    render() {
        const id = this.props.id;
        return (
            <div className="todo-wrap">
                <div className={classNames({
                    'todo': true,
                    [`todo-${this.props.type}`]: true,
                    'todo-shrink': true,
                    'active': this.props.active,
                })} onClick={e => {
                    this.props.expandTodo(e, this.props.id);
                    this.props.activeTodo(e, this.props.id);
                }}>
                    <label className="todo-control" onClick={e => e.stopPropagation()}>
                        <input type="checkbox" className="input-checkbox"
                               onChange={e => this.props.checkTodo(e, id)}
                               checked={this.props.isChecked}/>
                        <i className="icon-checkbox">
                            <FontAwesomeIcon className="icon-check" icon="check"/>
                        </i>
                    </label>
                    <article className='todo-content'>
                        <div className={classNames({
                            'content': true,
                            'checked': this.props.isChecked,
                        })}>
                            {this.props.content}
                        </div>
                    </article>
                    {this.props.attachment.length ? <i className="right-icon icon-paperclip">
                        <FontAwesomeIcon icon="paperclip"/>
                    </i> : null}
                    {this.props.remindSettings ? <span className="right-icon icon-calendar-alt">
                        <FontAwesomeIcon className="calendar-alt" icon="calendar-alt"/>
                        2 小时后
                    </span> : null}
                </div>
            </div>
        )
    }
}

Todo.propTypes = {
    isExpand: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
    attachment: PropTypes.array.isRequired,
    remindSettings: PropTypes.object,
}
