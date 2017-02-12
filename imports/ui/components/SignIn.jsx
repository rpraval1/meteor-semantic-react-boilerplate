import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import { createContainer } from 'meteor/react-meteor-data'
import { Button, Container, Form, Message } from 'semantic-ui-react';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: '',
      visible:false,
      loading:false
    };
  }

  handleSubmit(e,{formData}){
    e.preventDefault();
    this.setState({loading:true})
    const {email, password} = formData
    //Meteor-method
    Meteor.loginWithPassword(email, password, (err) => {
      if(err){
        console.log(err)
        this.setState({
          error: err.reason,
          visible:false
        });
      } else {
        browserHistory.push('/');
      }
      this.setState({loading:false})
    });
  }

  handleDismiss(){
    this.setState({ error: '',
    visible:false })

    // setTimeout(() => {
    //   this.setState({ visible: true })
    // }, 2000)
  }

  render(){
    const {error,loading} = this.state;
    return(
      <Container>
        {error.length > 0 ?
        <Message negative onDismiss={this.handleDismiss.bind(this)}>
          <Message.Header>{error}</Message.Header>
          <p>Please try again</p>
        </Message> : '' }
        <Form onSubmit={this.handleSubmit.bind(this)} loading={loading} >
          <Form.Input name='email' label='Enter Email' required type='text'/>
          <Form.Input name='password' label='Enter Password' required type='password' />
          <Button primary type='submit'>Signin</Button>
        </Form>
      </Container>
    );
  }
}

export default SignIn;
