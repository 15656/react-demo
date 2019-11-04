import React,{Component} from 'react';
import {mapStateToProps,mapDispatchToProps} from '../function.reducer'
import { connect } from 'react-redux'

class About extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
       <p>About--</p>
      </div>
    )
  }
}

export default  About = connect(mapStateToProps, mapDispatchToProps)(About) ;
