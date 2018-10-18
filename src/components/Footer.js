import React, { Component } from 'react'
import './Footer.scss'
// import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component {
    render() {
        return (
            <footer className="cont-footer">
                <button type="button" className="btn btn-round btn-large btn-microphone">
                    <i className="icon icon-microphone">
                        <FontAwesomeIcon icon="microphone" />
                    </i>
                </button>
                <button type="button" className="btn btn-round">
                    <i className="icon icon-edit">
                        <FontAwesomeIcon icon="edit" />
                    </i>
                </button>
            </footer>
        )
    }
}