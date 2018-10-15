import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MyTodo(props) {
    if (!props.isExpand) {
        return (
            <div>
                <input type="checkbox" />
                <article>{props.content}</article>
                {props.attachment.length ? <FontAwesomeIcon icon="paperclip" /> : null}
                {props.remindSettings ? <div>
                    <FontAwesomeIcon icon="calendar-alt" />
                </div> : null}
            </div>
        )
    } else {
        return (
            <div>isNOTExpand</div>
        )
    }
}

export default class Todo extends Component {
    render() {
        return MyTodo(this.props)
    }
}

Todo.propTypes = {
    isExpand: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired,
    attachment: PropTypes.array.isRequired,
    remindSettings: PropTypes.object,
}
