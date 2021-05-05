import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    userdetails: state.interface.userDetails,
    posts: state.business.posts
  };
}

function UserDetails(props) {
  const styles = {
    border: "1px solid red",
    backGroundColor: '#f5f2e9',
    padding: "10px",
    marginBottom: "10px"
  }

  return (
    <div style={styles}>
      <h1>{props.userdetails.name}</h1>
      <p>Users Posts</p>
      
      {props.userdetails.posts.map(key => {
        return (<div key={key}>
          <a href={"http://" + props.posts[key].url}>{props.posts[key].title}</a>
        </div>)
      })}

      <p>User votes</p>
      
      {Object.keys(props.userdetails.votes).map(key => {
        return (key !== undefined) ? (<div key={key}>
          <p> {props.userdetails.votes[key]} for  <a href={props.posts[key].url}>{props.posts[key].title}</a> </p>
        </div>) : null;
      })}
    </div>
  );
}

UserDetails.propTypes = {
  userdetails: PropTypes.object,
  posts: PropTypes.object
};

export default connect(mapStateToProps)(UserDetails);