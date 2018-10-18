import React, { Component } from 'react'
import './Menu.scss'
import Search from './Search'
import MenuItem from './MenuItem'
import MenuGroup from './MenuGroup'

export default class LeftMenu extends Component {
    render() {
        return (
            <React.Fragment>
                <Search />
                <MenuGroup title='胶囊列表'>
                    <MenuItem type="all" name="全部胶囊" count={3} />
                    <MenuItem type="note" name="记事" count={4} />
                    <MenuItem type="important" name="重要事项" count={5} />
                    <MenuItem type="today" name="今日待办" count={6} />
                    <MenuItem type="message" name="待发送消息" count={7} />
                    <MenuItem type="inspire" name="灵感" count={8} />
                    <MenuItem type="share" name="共享胶囊" count={9} />
                </MenuGroup>
                <MenuGroup title='计划完成的胶囊'>
                    <MenuItem type="scheduled" name="已计划" count={13} />
                </MenuGroup>
                <MenuGroup title='处理完毕的胶囊'>
                    <MenuItem type="completed" name="已完成" count={23} />
                    <MenuItem type="trash" name="回收站" count={33} />
                </MenuGroup>
            </React.Fragment>
        );
    }
}