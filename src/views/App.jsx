import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import routeConfig from '../router'
import 'element-theme-default';
import Home from './home'


class App extends Component {
  render() {
    const MainRouter = (
      <Home router={routeConfig.manin}></Home>
    );

    return (
      <div >
        <Router>
          <Switch>
           	{/* 登录页 */}
						{routeConfig.other.map((item) => (
							<Route exact key={item.path} path={item.path} component={item.component} />
						))}
            {/* 主要页面 */}
						<Route path="/" render={() => MainRouter} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
