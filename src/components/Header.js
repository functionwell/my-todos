import React, { Component } from 'react'
import './Header.scss'
// import classNames from 'classnames'
import HeaderBtn from './HeaderBtn'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <HeaderBtn title='同步' icon='sync' />
                <div className='title text-muted'>全部胶囊</div>
                <HeaderBtn title='隐藏/显示已完成的胶囊' icon='eye' />
                <HeaderBtn title='展开/收起所有胶囊' icon='arrows-alt-v' />
            </div>
        )
    }
}