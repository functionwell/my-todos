import React, {Component} from 'react'
import './App.scss'
import Menu from './components/Menu'
import Main from './components/Main'

// import HeaderSearch from './components/HeaderSearch'
// import Todo from './components/Todo'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app-menu border-right bg-white">
                    <Menu/>
                </div>
                <div className="app-cont">
                    <Main/>
                    {/* <div className="app-header">
            <div className="header-btn">
              <button type="button" title="同步" className="btn btn-outline">
                <i className="icon-sync">
                  <FontAwesomeIcon icon="sync" />
                </i>
              </button>
            </div>
            <div className="title"><h1 className="h5 text-muted">全部胶囊</h1></div>
            <div className="header-btn">
              <button type="button" title="展开/收起所有胶囊" className="btn btn-outline">
                <i className="icon-arrows-alt-v">
                  <FontAwesomeIcon icon="arrows-alt-v" />
                </i>
              </button>
            </div>
          </div>

          <main>
            <div className="list-wrap">
              <ul className="list-unstyled">
                <li>
                  <Todo isExpand={false} content="Todo component test" attachment={['qwe']}
                    remindSettings={{}} />
                </li>
                <li>
                  <Todo isExpand={true} content="撒打发斯蒂芬" attachment={['qwe']}
                    remindSettings={{}} />
                </li>
              </ul>
            </div>
          </main>
          <footer className="cont-footer">
            <button type="button" className="btn btn-round btn-large btn-microphone">
                <i className="icon icon-microphone">
                  <FontAwesomeIcon icon="microphone" />
                </i>
            </button>
            <button type="button" className="btn btn-round">
                <i className="icon icon-edit">
                  <FontAwesomeIcon icon="edit" />
                </i>
            </button>
          </footer> */}
                </div>
            </div>
        );
    }
}

export default App;
