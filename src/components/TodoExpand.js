import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './TodoExpand.scss'
import classNames from 'classnames'
// import {Editor} from 'slate-react'
// import Plain from 'slate-plain-serializer'

export default class TodoExpand extends Component {
    constructor(props) {
        super(props);

        this.txtRef = React.createRef();
    }

    // calcRows = () => {
    //     const width = getComputedStyle(this.txtRef.current).width;
    //     const fontSize = getComputedStyle(this.txtRef.current).fontSize;
    //     const textLen = this.txtRef.current.textLength;
    //     console.log(Math.ceil(parseInt(fontSize, 10) * textLen / parseInt(width, 10)))
    //     return this.txtRef.current.rows = Math.ceil(parseInt(fontSize, 10) * textLen / parseInt(width, 10));
    // }

    // componentDidMount(){
    //     this.calcRows()
    // }

    render() {
        const id = this.props.id;
        return (
            <div className="todo-wrap">
                <div className={classNames({
                    'todo': true,
                    [`todo-${this.props.type}`]: true,
                    'todo-expand': true,
                    'active': this.props.active,
                })} onClick={e => {
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
                        <div className='content-header'>
                            <div className='create-time'>
                                {this.props.createTime}
                            </div>
                            <i className='icon-chevron-up' onClick={e => {
                                this.props.shrinkTodo(e, this.props.id);
                                this.props.activeTodo(e, this.props.id);
                            }}>
                                <FontAwesomeIcon icon="chevron-up"/>
                            </i>
                        </div>
                        <div className={classNames({
                            'content': true,
                            'checked': this.props.isChecked,
                        })}>
                            {/* 第三方富文本编辑框 */}
                            {/*<Editor*/}
                            {/*placeholder="Enter some plain text..."*/}
                            {/*value={Plain.deserialize(this.props.content)}*/}
                            {/*onChange={change => this.props.editTodo(change, this.props.id)}*/}
                            {/*/>*/}

                            {/* textarea高度自适应问题 */}
                            <textarea ref={this.txtRef} rows={3}
                                      onChange={e => {
                                          this.props.editTodo(e, this.props.id);
                                      }}
                                      // onInput={e => this.txtRef.current.rows = this.calcRows()}
                                      value={this.props.content}/>

                            {/* contentEditable 光标位置跳到最前 */}
                            {/*<div contentEditable="true"*/}
                            {/*onInput={e => {*/}
                            {/*this.props.editTodo(e, this.props.id);*/}
                            {/*}}*/}
                            {/*>*/}
                            {/*{this.props.content}*/}
                            {/*</div>*/}
                        </div>
                        <div className='other'>
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
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}