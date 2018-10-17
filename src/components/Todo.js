import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Todo.scss'
import classNames from 'classnames'

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
            <div className="todo-wrap">
                {this.props.isExpand ?
                    <div className="todo-expand">
                        <label className="todo-control">
                            <input type="checkbox" className="input-checkbox" onChange={this.handleChange} checked={this.state.isChecked} />
                            <i className="icon-checkbox">
                                <FontAwesomeIcon className="icon-check" icon="check" />
                            </i>
                        </label>
                        <article className={classNames({ 'todo-content': true, 'checked': this.state.isChecked })}>
                            <div>2018年8月8日</div>
                            {/* <textarea value={this.props.content}></textarea> */}
                            {this.props.content}
                        </article>
                        <div>
                            <i className="right-icon icon-paperclip">
                                <FontAwesomeIcon icon="paperclip" />
                            </i>
                            <i className="right-icon icon-calendar-alt">
                                <FontAwesomeIcon className="calendar-alt" icon="calendar-alt" />
                            </i>
                        </div>
                    </div>
                    :
                    <div className="todo">
                        <label className="todo-control">
                            <input type="checkbox" className="input-checkbox" onChange={this.handleChange} checked={this.state.isChecked} />
                            <i className="icon-checkbox">
                                <FontAwesomeIcon className="icon-check" icon="check" />
                            </i>
                        </label>
                        <article className={classNames({ 'todo-content': true, 'checked': this.state.isChecked })}>{this.props.content}</article>
                        {this.props.attachment.length ? <i className="right-icon icon-paperclip">
                            <FontAwesomeIcon icon="paperclip" />
                        </i> : null}
                        {this.props.remindSettings ? <span className="right-icon icon-calendar-alt">
                            <FontAwesomeIcon className="calendar-alt" icon="calendar-alt" />
                            2 小时后
                            </span> : null}
                    </div>
                }
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
