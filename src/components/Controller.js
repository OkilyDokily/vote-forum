import List from "./List"
import Form from './Form'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDetails from "./UserDetails";

function mapStateToProps(state) {
  return {
    view:state.interface.view,
    userDetails:state.interface.userDetails
  };
}

class Controller extends Component {
 
  render() {

    const {dispatch} = this.props;

    switch(this.props.view){
      case "default":
      return(
        <div>
          <List />
          <button onClick={()=>dispatch({type:"VIEW",view:"add"})}>Add a post</button>
        </div> 
      )
      case "add":
        return(
          <div>
            <Form changeView={this.switch}/>
            <button onClick={() => dispatch({ type: "VIEW", view: "default" })}>Go back to list</button>
          </div>
        )
      case "user-details":
          return(
            <div>
              <UserDetails />
              <button onClick={() => this.switch("default")}>Go back to list</button>
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