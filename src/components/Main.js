import React, { Component } from 'react'
import './Main.scss'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Header from './Header'
import Footer from './Footer'
import TodoList from './TodoList'

export default class RightCont extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <TodoList todos={[{
                    isExpand: false,
                    content: "Todo component test",
                    attachment: ['qwe'],
                    remindSettings: {},
                },{
                    isExpand: false,
                    content: "Todo component test 2",
                    attachment: ['qwe'],
                    remindSettings: {},
                },]} />
                <Footer />
            </React.Fragment>
        );
    }
}