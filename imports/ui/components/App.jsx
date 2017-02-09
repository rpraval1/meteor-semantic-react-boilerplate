//import libraries
import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

//create component
class App extends Component {

  constructor(props) {
    super(props);

  }

  render(){
    this.base_url = "http://localhost:3000/";

    //console.log(this.base_url);
    return(
      <div>
        <Header base_url={this.base_url} />
          {this.props.children}
        <Footer />
      </div>

    );
  }

}

export default App;
