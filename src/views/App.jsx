import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import routeConfig from '../router'
import 'element-theme-default';
import Home from './home'
// import RouterMap from './routerMap'


class App extends Component {
  render() {
    const MainRouter = (
      <Home router={routeConfig.manin}></Home>
    );

    return (
      <div >
        <Router>
          <Switch>
            {
              routeConfig.other.map((router, index) => {
                  return <Route exact key={index} path={router.path} render={() => router.component} />
                // else {

                //   return <Route key={index} path={router.path}
                //     render={
                //       props => (
                //         <router.component {...props} routes={router.routes} />
                //       )
                //     }
                //   />

                // }

              })
            }
           {/* 主要页面 */}
						<Route path="/" render={() => MainRouter} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
