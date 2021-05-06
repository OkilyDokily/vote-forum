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

  const userVotes ={
    borderBottom:"solid 1px black",
    width: "30%"
  }

  const userPosts = {
    borderBottom: "solid 1px black",
    width: "30%"
  }


  return (
    <div style={styles}>
      <h1>User Details</h1>
      <h2>{props.userdetails.name}</h2>
      <p style={userPosts}>Users Posts</p>
      
      {props.userdetails.posts.map(key => {
        return (<div key={key}>
          <a href={"http://" + props.posts[key].url}>{props.posts[key].title}</a>
        </div>)
      })}

      <p style={userVotes}>Likes</p>
      
      {Object.keys(props.userdetails.votes).filter(key => (props.userdetails.votes[key] === "up")).map(key => {
        return (key !== undefined) ? (<div key={key}>
          <a href={props.posts[key].url}>{props.posts[key].title}</a> 
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