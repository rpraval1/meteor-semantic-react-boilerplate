//import libraries
import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import { Container, Menu } from 'semantic-ui-react'
import { browserHistory } from 'react-router';

//create component
class NavBar extends Component{
  constructor(props) {
    super(props);

    this.state = {activeItem:""}
    //console.log(props);
  }
  handleItemClick(e,{name}){
    this.setState({activeItem: name})
  }
  logout(e){
    e.preventDefault();
    Meteor.logout();
    browserHistory.push('/');
  }

  render(){
    const { currentUser, children, base_url, loginToken} = this.props;
    const {activeItem} = this.state

  return(
    <div>
      { loginToken ?
        <Menu>
          <Menu.Item>
            <img src='http://semantic-ui.com/images/logo.png' />
          </Menu.Item>
        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick.bind(this)}
        ></Menu.Item>

        <Menu.Item
          name='settings'
          active={activeItem === 'settings'}
          onClick={this.handleItemClick.bind(this)}
        ></Menu.Item>

        <Menu.Item position='right'
          name='signout'
          active={activeItem === 'signout'}
          onClick={this.logout.bind(this)}
        >
        </Menu.Item>
      </Menu>
         :
         <Menu >
           <Menu.Item>
             <img src='http://semantic-ui.com/images/logo.png' />
           </Menu.Item>
           <Menu.Menu position='right'>
         <Menu.Item href={Meteor.absoluteUrl('signup')} name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick.bind(this)}>
           Sign Up
         </Menu.Item>

         <Menu.Item href={Meteor.absoluteUrl('signup')} name='signin' active={activeItem === 'signin'} onClick={this.handleItemClick.bind(this)}>
           Sign In
         </Menu.Item>
       </Menu.Menu>
        </Menu>
      }
    </div>
      );
  }
}

export default createContainer(() => {
  return { currentUser: Meteor.user(), loginToken: localStorage.getItem("Meteor.loginToken")  };
},NavBar);
