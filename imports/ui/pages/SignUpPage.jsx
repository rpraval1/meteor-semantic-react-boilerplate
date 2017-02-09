import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data'
import { Button, Container, Message, Segment } from 'semantic-ui-react';
import SignUp from '../components/SignUp';

export default class SignUpPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
  }

  render(){
    const error = this.state.error;
    return (
      <Container textAlign='center'>
        <Segment color='violet' size='big' padded='very' raised>
          <SignUp />
        </Segment>
      </Container>
    );
  }
}
