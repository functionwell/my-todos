import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Todo.scss'
import classNames from 'classnames'
// import TodoExpand from './TodoExpand'

export default class Todo extends Component {
    state = {
        isChecked: true,
    }

    handleChange = (e) => {
        e.stopPropagation();
        this.setState({
            isChecked: !this.state.isChecked
        })
    }

    render() {
        return (
            <div className="todo-wrap">
                <div className={classNames({
                    'todo': true,
                    [`todo-${this.props.type}`]: true,
                    'todo-shrink': !this.props.isExpand,
                    'todo-expand': this.props.isExpand,
                    'active': this.props.active,
                })} onClick={e => {this.props.expandTodo(e, this.props.id);this.props.activeTodo(e,this.props.id);}}>
                    <label className="todo-control" onClick={e => e.stopPropagation()}>
                        <input type="checkbox" className="input-checkbox"
                               onChange={this.handleChange}
                               checked={this.state.isChecked}/>
                        <i className="icon-checkbox">
                            <FontAwesomeIcon className="icon-check" icon="check"/>
                        </i>
                    </label>
                    <article className='todo-content'>
                        {this.props.isExpand && <div className='content-header'>
                            <div className='create-time'>
                                {this.props.createTime}
                            </div>
                            <i className='icon-chevron-up' onClick={e => {this.props.shrinkTodo(e, this.props.id);this.props.activeTodo(e,this.props.id);}}>
                                <FontAwesomeIcon icon="chevron-up"/>
                            </i>
                        </div>}
                        <div className={classNames({
                            'content': true,
                            'checked': this.state.isChecked,
                        })}>
                            {this.props.content}
                        </div>
                        {this.props.isExpand && <div className='other'>
                            <div>
                                <i className='icon icon-paperclip'>
                                    <FontAwesomeIcon icon="paperclip"/>
                                </i>
                                {this.props.attachment.length ? <span className='attach-group'>
                                    {this.props.attachment.map((item, index) => (
                                        <span key={index} className='attach-item'>
                                        <img src={item.src} alt={`attach-${index}`}/>
                                    </span>))}
                                </span> : null}
                            </div>
                            <div>
                                <i className='icon icon-calendar-alt'>
                                    <FontAwesomeIcon icon="calendar-alt"/>
                                </i>
                                <span className='remind'>
                                    156 小时后
                                </span>
                            </div>
                        </div>}
                    </article>
                    {!this.props.isExpand && this.props.attachment.length ? <i className="right-icon icon-paperclip">
                        <FontAwesomeIcon icon="paperclip"/>
                    </i> : null}
                    {!this.props.isExpand && this.props.remindSettings ? <span className="right-icon icon-calendar-alt">
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
