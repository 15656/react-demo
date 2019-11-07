import React,{Component} from 'react';
import Nav from './Nav'
import About from './About'
import Info from './Info'
import Reduxstore from './Reduxstore'
import './home.css'
import {  Route } from "react-router-dom";


const div = {
  width:'100%',
  height:'100%',
  display:'flex',
  position:'absolute',
  top:0,
  backgroundColor:'#5e6269'
}


class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.handleClick = this.handleClick.bind(this);
  //   // this.state = {
  //   //   name: "菜鸟教程",
  //   //   site: "https://www.runoob.com"
  //   // }
  // }
  // handleClick(){
  //  this.setState({
  //   name:this.state.name + '9999'
  //  })
  // }
  render() {
    return (
      <div style={div}>
        <div className="aside">
           <Nav />
        </div>
        <div className="contant">
          <Route path='/info' component={Info}/>
          <Route path='/about'  component={About}/>
          <Route path='/redux'  component={Reduxstore}/>
        </div>
      </div>
    );
  }
}

export default  Home;
