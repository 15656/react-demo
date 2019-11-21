import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './home.css'

const selectedStyle = {
  backgroundColor: 'slategray',
  color: 'white',
  borderLeft:'2px solid  red'
}

class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      navList:[
        {
        name:'info',
        part:'/info'
      },
     {
        name:'about',
        part:'/about'
      },
      {
        name:'redux',
        part:'/redux'
      }
    ]
    }
  }

  render() {
    return (
      <div>
        <nav className='main-menu'>
          {this.state.navList.map((val,index) =>{
              return(
                <NavLink key={index} activeStyle = {selectedStyle} to={val.part}>{val.name}</NavLink>
              )
          })}
         </nav>
      </div>
    );
  }
}

export default Nav;
