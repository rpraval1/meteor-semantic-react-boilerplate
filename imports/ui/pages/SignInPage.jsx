import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data'
import { Button, Container, Message, Segment } from 'semantic-ui-react';
import SignIn from '../components/SignIn';

export default class SignInPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  }

  componentWillMount(){
    if(this.props.loginToken){
      browserHistory.push('/');
    }
  }

  render(){
    const error = this.state.error;
    return (
      <Container textAlign='center'>
        <Segment color='violet' size='big' padded='very' raised>
          <SignIn />
        </Segment>
      </Container>
    );
  }
}
