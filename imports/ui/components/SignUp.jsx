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
      loading: false
    };
  }

  handleSubmit(e,{formData}){
    e.preventDefault();
    this.setState({loading: true})
    //validate
    Meteor.call('users.validate',{email:formData.email, username:formData.username}, function(error){
      if(error){
        //console.log(error.reason);
        this.setState({error:error.reason, visible:true})
      }else{
        const { username, email, password, name } = formData
          //Meteor-method
          Accounts.createUser({username, email, password, profile:{name, pname:name}}, (err) => {
            if(err){
              this.setState({
                error: err.reason
              });
            } else {
              browserHistory.push('/');
            }
          });
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
    const {error,loading} = this.state;

    return(
      <Container>
        {error.length > 0 ?
        <Message negative onDismiss={this.handleDismiss.bind(this)}>
          <Message.Header>{error}</Message.Header>
          <p>Please try again</p>
        </Message> : '' }
        <Form onSubmit={this.handleSubmit.bind(this)} loading={loading}>
          <Form.Input name='email' label='Enter Email' required type='text'/>
          <Form.Input name='name' label='Enter Name' required type='text'/>
          <Form.Input name='username' label='Enter Username' required type='text'/>
          <Form.Input name='password' label='Enter Password' required type='password' />
          <Button primary type='submit'>Signup</Button>
        </Form>
      </Container>
    );
  }
}
export default SignUp;
