import React, { Component } from 'react';
import {mapStateToProps,mapDispatchToProps} from '../function.reducer'
import { connect } from 'react-redux'



class Reduxstore extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        const { PayIncrease, PayDecrease } = this.props;
        return (
            <div className="App">
                <div className="App">
                    <h2>当月工资为{this.props.tiger.text}</h2>
                    <button onClick={PayIncrease}>升职加薪</button>
                    <button onClick={PayDecrease}>迟到罚款</button>
                </div>
            </div>
        );
    }
}  

export default Reduxstore = connect(mapStateToProps, mapDispatchToProps)(Reduxstore) ;
  
