import React, { Component } from 'react'
import './Menu.scss'
import HeaderSearch from './Search'
import MenuItem from './MenuItem'


export default class LeftMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="border-bottom">
                    <HeaderSearch/>
                </div>
                <div className='menu-group'>
                    <h3 className="menu-group-title">胶囊列表</h3>
                    <MenuItem type="all" name="全部胶囊" count={3}></MenuItem>
                    <MenuItem type="note" name="记事" count={3}></MenuItem>
                    <MenuItem type="important" name="重要事项" count={3}></MenuItem>
                    <MenuItem type="today" name="今日待办" count={3}></MenuItem>
                    <MenuItem type="message" name="待发送消息" count={3}></MenuItem>
                    <MenuItem type="inspire" name="灵感" count={3}></MenuItem>
                    <MenuItem type="share" name="共享胶囊" count={3}></MenuItem>
                </div>
                <div className='menu-group'>
                    <h3 className="menu-group-title">计划完成的胶囊</h3>
                    <MenuItem type="scheduled" name="已计划" count={3}></MenuItem>
                </div>
                <div className='menu-group'>
                    <h3 className="menu-group-title">处理完毕的胶囊</h3>
                    <MenuItem type="completed" name="已完成" count={3}></MenuItem>
                    <MenuItem type="trash" name="回收站" count={3}></MenuItem>
                </div>
            </React.Fragment>
        );
    }
}