import React, { Component } from 'react'
import './App.scss'
import Search from './components/Search'
import Todo from './components/Todo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-menu border-right">
          <div className="app-header border-bottom">
            <Search placeholder="搜索全部胶囊"></Search>
          </div>
          <div className="menu-list-wrap">
            <div className="menu-list">
              <h3 className="list-title">胶囊列表</h3>
              <ul className="list-unstyled">
                <li>
                  <div className="menu-item">
                    <i className="menu-icon icon-folder">
                      <FontAwesomeIcon icon="folder" />
                    </i>
                    <span className="item-title">全部胶囊</span>
                    <span className="nums">7</span>
                  </div>
                </li>
                <li>
                  <div className="menu-item">
                    <i className="menu-icon icon-clipboard">
                      <FontAwesomeIcon icon="clipboard-list" />
                    </i>
                    <span className="item-title">记事</span>
                    <span className="nums">17</span>
                  </div>
                </li>
                <li>
                  <div className="menu-item">
                    <i className="menu-icon icon-exclamation">
                      <FontAwesomeIcon icon="exclamation" />
                    </i>
                    <span className="item-title">重要事项</span>
                    <span className="nums">27</span>
                  </div>
                </li>
                <li>
                  <div className="menu-item active">
                    <i className="menu-icon icon-star">
                      <FontAwesomeIcon icon="star" />
                    </i>
                    <span className="item-title">今日待办</span>
                    <span className="nums">37</span>
                  </div>
                </li>
                <li>
                  <div className="menu-item">
                    <i className="menu-icon icon-comment">
                      <FontAwesomeIcon icon="comment" />
                    </i>
                    <span className="item-title">待发送消息</span>
                    <span className="nums">47</span>
                  </div>
                </li>
                <li>
                  <div className="menu-item">
                    <i className="menu-icon icon-lightbulb">
                      <FontAwesomeIcon icon="lightbulb" />
                    </i>
                    <span className="item-title">灵感</span>
                    <span className="nums">57</span>
                  </div>
                </li>
                <li>
                  <div className="menu-item">
                    {/* <i className="menu-icon icon-star-half-alt">
                      <FontAwesomeIcon icon="star-half-alt" />
                    </i> */}
                    <i className="menu-icon icon-half"></i>
                    <span className="item-title">共享胶囊</span>
                    <span className="nums">67</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="menu-list list-other">
            <h3 className="list-title">计划完成的胶囊</h3>
            <ul className="list-unstyled">
              <li>
                <div className="menu-item">
                  <i className="menu-icon">
                    <FontAwesomeIcon icon="calendar-check" />
                  </i>
                  <span className="item-title">已计划</span>
                  <span className="nums">3</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="menu-list list-other">
            <h3 className="list-title">处理完毕的胶囊</h3>
            <ul className="list-unstyled">
              <li>
                <div className="menu-item">
                  <i className="menu-icon">
                    <FontAwesomeIcon icon="check" />
                  </i>
                  <span className="item-title">已完成</span>
                  <span className="nums">0</span>
                </div>
              </li>
              <li>
                <div className="menu-item">
                  <i className="menu-icon">
                    <FontAwesomeIcon icon="trash-alt" />
                  </i>
                  <span className="item-title">回收站</span>
                  <span className="nums">3</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="app-cont">
        <div className="app-header"></div>
          <header className="cont-header">
            <div>
              <button type="button" title="同步" className="btn btn-outline-primary">
                <FontAwesomeIcon icon="sync" />
              </button>
            </div>
            <div className="title"><h2>全部胶囊</h2></div>
            <div>
              <button type="button" title="展开/收起所有胶囊" className="btn btn-outline-dark">
                <FontAwesomeIcon icon="arrows-alt-v" />
              </button>
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
                    remindSettings={null} />
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
