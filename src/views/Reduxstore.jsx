import React, { Component } from 'react';
// import {mapStateToProps,mapDispatchToProps} from '../function.reducer'
import { connect } from 'react-redux'


//需要渲染什么数据
export   function mapStateToProps(state) {
    return {
      tiger: state
    }
  }
  let str = null;
//   const add = () => str;

//需要触发什么行为
export   function mapDispatchToProps(dispatch) {
    return {
      PayIncrease: () => dispatch(str),
      PayDecrease: () => dispatch({ type: '扣工资',text:555}),
    }
  }



class Reduxstore extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    addnumber(){
        str =  {type: "涨工资" ,text:999999999999};
        this.props.PayIncrease();
    }
    render() {
        const { PayDecrease } = this.props;
        return (
            <div className="App">
                <div className="App">
                    <h2>当月工资为{this.props.tiger.text}</h2>
                    <button onClick={() => this.addnumber()}>升职加薪</button>
                    <button onClick={PayDecrease}>迟到罚款</button>
                </div>
            </div>
        );
    }
}  

export default Reduxstore = connect(mapStateToProps, mapDispatchToProps)(Reduxstore) ;
  
