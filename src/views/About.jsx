import React,{Component} from 'react';
import {HttpGet} from '../api/index'

class About extends Component {
  componentDidMount(){
    this.init();
  }
  async init(){
    const data = await HttpGet('member/back/city/list/1',{});
    let id = null;
    if(data){
      id = data.data[1].id;
    }
    const data1 = await HttpGet('member/back/city/list/'+id,{});
    if(data1){
      console.log(data1)
    }
   
    // .then(res =>{
    //   if(res.code === 0){
    //     //js跳转
    //     // setTimeout(() =>{
    //     //   this.props.history.push({ pathname : '/redux' ,query : res.data })
    //     // },5000)
    //   }
    // })
  }
  render() {
    console.log(this.props)
    return (
      <div>
       <p>About--</p>
      </div>
    )
  }
}

export default  About;
