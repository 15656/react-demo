import React,{Component} from 'react';
import { Link } from 'react-router-dom';
let query = {
  pathname: '/home/info',
  query: '我是通过query传值 '
}

class Info extends Component {
  render() {
    return (
      <div>
       <p>Info</p>
       <Link to={query}>home</Link>
      </div>
    )
  }
}

export default Info;
