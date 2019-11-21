import React, { Component } from 'react';
import Nav from './Nav'
import './home.css'
import {  Route, Switch,Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../function.reducer'
import store from "../index.reducer"
// import { Button } from 'element-react';


const div = {
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'absolute',
  top: 0,
  backgroundColor: '#5e6269'
}


class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    store.subscribe(() => {
      console.log('state状态改变了，新状态如下')
      console.log(store.getState())
    })
  }
  handleClick() {
    this.setState({
      name: this.state.name + '9999'
    })
  }
  render() {
    const router = this.props.router
    return (
      <div style={div}>
        <div className="aside">
          <Nav />
        </div>
        <div className="contant">
          <Switch>
            {router.map((item) => (
              <Route exact key={item.path} path={item.path} component={item.component} />
            ))}
            <Route render={() => <Redirect to="/404" />} />
          </Switch>
        </div>
      </div>
    );
  }
}


export default Home = connect(mapStateToProps, mapDispatchToProps)(Home);
