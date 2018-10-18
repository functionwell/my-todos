import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MenuGroup.scss'
import MenuItem from './MenuItem'

export default class MenuGroup extends Component {
    render() {
        return (
            <div className='menu-group'>
                {this.props.group === 'all' ? (
                    <React.Fragment>
                        <h3 className="group-title">胶囊列表</h3>
                        <MenuItem type="all" name="全部胶囊" count={3}></MenuItem>
                        <MenuItem type="note" name="记事" count={3}></MenuItem>
                        <MenuItem type="important" name="重要事项" count={3}></MenuItem>
                        <MenuItem type="today" name="今日待办" count={3}></MenuItem>
                        <MenuItem type="message" name="待发送消息" count={3}></MenuItem>
                        <MenuItem type="inspire" name="灵感" count={3}></MenuItem>
                        <MenuItem type="share" name="共享胶囊" count={3}></MenuItem>
                    </React.Fragment>
                ) : this.props.group === 'scheduled' ? (
                    <React.Fragment>
                        <h3 className="group-title">计划完成的胶囊</h3>
                        <MenuItem type="scheduled" name="已计划" count={3}></MenuItem>
                    </React.Fragment>
                ) : this.props.group === 'completed' ? (
                    <React.Fragment>
                        <h3 className="group-title">处理完毕的胶囊</h3>
                        <MenuItem type="completed" name="已完成" count={3}></MenuItem>
                        <MenuItem type="trash" name="回收站" count={3}></MenuItem>
                    </React.Fragment>
                ) : null}
            </div>
        );
    }
}

MenuGroup.propTypes = {
    group: PropTypes.string.isRequired,
}