import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import routeConfig from '../router'
import Errorpage from './error'
import 'element-theme-default';


class App extends Component {
  render() {
    return (
      <div >
        <Router>
          <Switch>
            {
              routeConfig.map((router, index) => {
                if (router.exact) {

                  return <Route exact key={index} path={router.path}
                    render={
                      props => (
                        <router.component {...props} routes={router.routes} />
                      )
                    }
                  />

                } else {

                  return <Route key={index} path={router.path}
                    render={
                      props => (
                        <router.component {...props} routes={router.routes} />
                      )
                    }
                  />

                }

              })
            }
            {/* // 所有错误路由跳转页面 */}
            <Route component={Errorpage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
