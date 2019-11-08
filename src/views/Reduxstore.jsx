import React, { Component } from 'react';
import { mapStateToProps, mapDispatchToProps } from '../function.reducer'
import { connect } from 'react-redux'


// import { Button } from 'element-react';





class Reduxstore extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  addnumber() {
    let str = {
      type: "涨工资", obj: {
        name: "33333333",
        age: 222,
        num: 1223242342
      }
    };
    this.props.PayIncrease(str);
  }
  removenumber() {
    let str = {
      type: "扣工资", obj: {
        name: "555555",
        age: 33333,
        num: 3333
      }
    };
    this.props.PayDecrease(str);
  }
  render() {
    return (
      <div className="App">
        <div className="App">
        {/* <Button type="primary">Hello</Button> */}
          <h2>当月工资为{this.props.tiger.name}={this.props.tiger.age}={this.props.tiger.num}</h2>
          <button onClick={() => this.addnumber()}>升职加薪</button>
          <button onClick={() => this.removenumber()}>迟到罚款</button>
        </div>
      </div>
    );
  }
}

export default Reduxstore = connect(mapStateToProps, mapDispatchToProps)(Reduxstore) ;

