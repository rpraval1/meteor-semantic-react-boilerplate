import React, { Component } from 'react'
import { Container, Grid, Icon, Menu, Message, Segment } from 'semantic-ui-react'
import SignIn from './SignIn';
import SignUp from './SignUp';

class Landing extends Component{
  constructor(props) {
    super(props);

    this.state = {
      activeItem:'signup',
      signComponent:'signup'
    }
    //console.log(props);
  }

  handleItemClick(e,{name}){
    this.setState({activeItem: name,signComponent: name})
  }


  render(){
    const {activeItem, signComponent} = this.state
    return(
      <Container fluid>
        <Grid>
          <Grid.Column width={10} stretched>
            <Segment>
              Readme
            </Segment>
          </Grid.Column>
          <Grid.Column width={6} stretched>
            <div>
              <Segment attached='top'>
                {signComponent == 'signup' ? <SignUp /> : <SignIn />}
              </Segment>

              <Menu attached='bottom' tabular>
                <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick.bind(this)}>
                  SignUp
                </Menu.Item>
                <Menu.Item name='signin' active={activeItem === 'signin'} onClick={this.handleItemClick.bind(this)}>
                  SignIn
                </Menu.Item>
              </Menu>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default Landing
