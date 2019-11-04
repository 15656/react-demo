import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './views/home'
class App extends Component {

  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <Router>
          <Route path="/" component={Home}></Route>
        </Router>
      </div>
    );
  }
}



export default App