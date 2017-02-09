//import libraries
import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import NavBar from './NavBar';


//create component
const Header = (props) => {
  return(
    <NavBar base_url={props.base_url} />
  );
}

export default Header;
