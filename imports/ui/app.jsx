import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import ExampleMessage from './message';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = { activeItem: 'home' }
  }


  _handleItemClick(e, { name }){
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Segment inverted>
          <Menu inverted secondary>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this._handleItemClick.bind(this)} />
            <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this._handleItemClick.bind(this)} />
            <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this._handleItemClick.bind(this)} />
          </Menu>
        </Segment>
        <ExampleMessage />
      </div>
    );
  }
}
