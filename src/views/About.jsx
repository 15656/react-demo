import React,{Component} from 'react';
import {mapStateToProps,mapDispatchToProps} from '../function.reducer'
import { connect } from 'react-redux'
import {HttpGet} from '../api/index'

class About extends Component {
  render() {
    HttpGet('member/back/city/list/1',{}).then(res =>{
      if(res.code === 0){
        //js跳转
        setTimeout(() =>{
          this.props.history.push({ pathname : '/home/redux' ,query : res.data })
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

export default  About = connect(mapStateToProps, mapDispatchToProps)(About) ;
