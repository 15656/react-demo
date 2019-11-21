import React,{Component} from 'react';
import {HttpGet} from '../api/index'

class About extends Component {
  render() {
    HttpGet('member/back/city/list/1',{}).then(res =>{
      if(res.code === 0){
        //js跳转
        setTimeout(() =>{
          this.props.history.push({ pathname : '/redux' ,query : res.data })
        },5000)
      }
    })
    console.log(this.props)
    return (
      <div>
       <p>About--</p>
      </div>
    )
  }
}

export default  About;
