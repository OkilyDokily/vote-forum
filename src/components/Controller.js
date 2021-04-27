import List from "./List"
import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    
  };
}

class Controller extends Component {
  constructor(){
    super();
    this.state = {
      view:"default"
    }
  }
  render() {
  
    switch(this.state.view){
      case "default":
      return(
        <div>
          <List/>
        </div>
      )
      default:
        return null;
    }
   
  }
}

export default connect(
  mapStateToProps,
)(Controller);