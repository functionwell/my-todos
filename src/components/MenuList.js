import React, { Component } from 'react'
import './MenuList.scss'
import MenuGroup from './MenuGroup'

export default class MenuList extends Component {
    render() {
        return (
            <React.Fragment>
                <MenuGroup group="all"></MenuGroup>
                <MenuGroup group="scheduled"></MenuGroup>
                <MenuGroup group="completed"></MenuGroup>
            </React.Fragment>
        );
    }
}