import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Search from './components/Search'
import Todo from './components/Todo'

library.add(fas)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-menu">
          <Search placeholder="搜索全部胶囊"></Search>
          {/* <div className="search-wrap">
            <input type="search" placeholder="搜索全部胶囊"/>
          </div> */}
          <div className="menu-list-wrap">
            <h2 className="list-header">胶囊列表</h2>
            <div className="todo-list">
              <i className="iconfont icon-folder">icon</i>
              <h3>全部胶囊</h3>
              <div className="">6</div>
            </div>
            <div className="plan-list"></div>
            <div className="done-list"></div>
          </div>
        </div>
        <div className="App-cont">
          <header className="cont-header">
            <div>
              <button type="button">刷新</button>
            </div>
            <div className="title"><h2>全部胶囊</h2></div>
            <div>
              <button type="button">展开</button>
            </div>
          </header>
          <main>
            <div className="list-wrap">
              <ul>
                <li className="cont-todo">
                  <input type="checkbox" />
                  <div>这是我的第一条代办事项</div>
                </li>
                <li>
                  <Todo isExpand={false} content="Todo component test" attachment={['qwe']}
                  remindSettings={null}></Todo>
                </li>
              </ul>
            </div>
          </main>
          <footer className="cont-footer">
            <button>新建胶囊</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
