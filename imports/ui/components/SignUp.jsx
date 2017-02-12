import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data'
import { Button, Container, Form, Message } from 'semantic-ui-react';

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
      visible:false,
      loading: false,
      formerror: false
    };
  }

  handleSubmit(e,{formData}){
    e.preventDefault();
    this.setState({loading: true})
    //validate
    Meteor.call('users.create',formData, function(error){
      if(error){
        console.log(error.reason);
        this.setState({error:error.reason, visible:true, formerror: true})
      } else {
        browserHistory.push('/signin');
      }
      this.setState({loading: false})
    }.bind(this));
  }

  handleDismiss(){
    this.setState({ error: '',
    visible:false })

    // setTimeout(() => {
    //   this.setState({ visible: true })
    // }, 2000)
  }

  render(){
    const {error,loading, formerror} = this.state;

    return(
      <Container>
        {error.length > 0 ?
        <Message negative onDismiss={this.handleDismiss.bind(this)}>
          <Message.Header>{error}</Message.Header>
          <p>Please try again</p>
        </Message> : '' }
        <Form onSubmit={this.handleSubmit.bind(this)} loading={loading} error={formerror}>
          <Form.Input name='email' label='Enter Email' required type='text'/>
          <Form.Input name='username' label='Enter Username' required type='text'/>
          <Form.Input name='password' label='Enter Password' required type='password' />
          <Button primary type='submit'>Signup</Button>
        </Form>
      </Container>
    );
  }
}
export default SignUp;
