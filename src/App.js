import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-menu">
          <div className="search-wrap">
            <input type="search" placeholder="搜索全部胶囊"/>
          </div>
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
            <button type="button">刷新</button>
            <h2>全部胶囊</h2>
            <button type="button">扩展</button>
          </header>
          <main>
            <div className="list-wrap">
              <ul>
                <li className="cont-todo">
                  <input type="checkbox"/>
                  <div>这是我的第一条代办事项</div>
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
