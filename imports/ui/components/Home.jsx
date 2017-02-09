import React, { Component } from 'react'
import {createContainer} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Message } from 'semantic-ui-react'
import Loading from './Loading';

class Home extends Component{
  render(){
    const { currentUser, loginToken } = this.props

    if(loginToken && !currentUser) return <Loading />

    return(
      <Message>
        <Message.Header>
           { loginToken ? 'Welcome, '+ currentUser.profile.name : '' }
        </Message.Header>
        <p>
          This is a test for meteor-react-semantic-ui boilerplate. You can now clone this and enjoy your project bulding with meteor-react-semantic-ui!!
        </p>
      </Message>
    );
  }
}

export default createContainer(() => {
  return { currentUser: Meteor.user(), loginToken: localStorage.getItem("Meteor.loginToken")  };
},Home);
