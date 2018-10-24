import React, {Component} from 'react'
import './Main.scss'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Header from './Header'
import Footer from './Footer'
import TodoList from './TodoList'
// import Plain from 'slate-plain-serializer'

export default class RightCont extends Component {
    state = {
        todos: [{
            id: 0,
            isExpand: true,
            active: false,
            type: 'note',
            isChecked: true,
            createTime: '2018年9月9日 09:09',
            isDeleted: false,
            content: "Todo component test",
            attachment: [],
            remindSettings: null,
        }, {
            id: 1,
            isExpand: true,
            active: false,
            type: 'important',
            isChecked: false,
            createTime: '2018年9月9日 18:09',
            isDeleted: false,
            content: "重要事项123重要事项123重要事项123重要事项123重要事项123重重要事项123重要事项123重要事项123重要事项123重要事项123重重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123",
            attachment: [{src: './media/2018.jpg'}, {src: './media/002.jpg'}],
            remindSettings: null,
        }, {
            id: 2,
            isExpand: true,
            active: false,
            type: 'today',
            isChecked: false,
            createTime: '2018年9月9日 18:09',
            isDeleted: false,
            content: "重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123",
            attachment: [{src: './media/2018.jpg'}, {src: './media/002.jpg'}],
            remindSettings: null,
        }, {
            id: 3,
            isExpand: true,
            active: false,
            type: 'inspire',
            isChecked: false,
            createTime: '2018年9月9日 18:09',
            isDeleted: false,
            content: "重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123",
            attachment: [{src: './media/2018.jpg'}, {src: './media/002.jpg'}],
            remindSettings: {},
        }, {
            id: 4,
            isExpand: true,
            active: false,
            type: 'message',
            isChecked: false,
            createTime: '2018年9月9日 18:09',
            isDeleted: false,
            content: "重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123",
            attachment: [{src: './media/2018.jpg'}, {src: './media/002.jpg'}],
            remindSettings: {},
        }, {
            id: 5,
            isExpand: true,
            active: false,
            type: 'share',
            isChecked: false,
            createTime: '2018年9月9日 18:09',
            isDeleted: false,
            content: "重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123重要事项123",
            attachment: [{src: './media/2018.jpg'}, {src: './media/002.jpg'}],
            remindSettings: {},
        },]
    }

    checkTodo = (e, id) => {
        const item = this.state.todos.find(item => item.id === id);
        item.isChecked = !item.isChecked;
        this.setState({
            todos: this.state.todos
        });
    }

    editTodo = (e, id) => {
        const item = this.state.todos.find(item => item.id === id);
        item.content = e.target.value;
        this.setState({
            todos: this.state.todos
        });
    }

    activeTodo = (e, id) => {
        const item = this.state.todos.find(item => item.id === id);
        const activeItem = this.state.todos.find(item => item.active === true);
        if (!item.active) {
            if (activeItem) {
                activeItem.active = false;
            }
            item.active = true;
            this.setState({
                todos: this.state.todos
            });
        }
    }

    shrinkTodo = (e, id) => {
        e.stopPropagation();
        const item = this.state.todos.find(item => item.id === id);
        if (item.isExpand) {
            item.isExpand = false;
            this.setState({
                todos: this.state.todos
            });
        }
    }

    expandTodo = (e, id) => {
        const item = this.state.todos.find(item => item.id === id);
        if (!item.isExpand) {
            item.isExpand = true;
            this.setState({
                todos: this.state.todos
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header/>
                <TodoList todos={this.state.todos}
                          shrinkTodo={this.shrinkTodo}
                          expandTodo={this.expandTodo}
                          activeTodo={this.activeTodo}
                          editTodo={this.editTodo}
                          checkTodo={this.checkTodo}/>
                <Footer/>
            </React.Fragment>
        );
    }
}