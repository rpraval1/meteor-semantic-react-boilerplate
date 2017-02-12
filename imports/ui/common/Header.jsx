//import libraries
import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import NavBar from './NavBar';


//create component
const Header = () => {
  return(
    <NavBar />
  );
}

export default Header;
