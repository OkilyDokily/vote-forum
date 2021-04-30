import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

UserDetails.propTypes = {
  
};

function mapStateToProps(state) {
  return {
    userdetails:state.posts.users[state.interface.userdetails],
    posts:state.posts
  };
}

function UserDetails(props) {
  return (
    <div>
      <p>Users Posts</p>
      {Object.keys(props.userdetails.posts).map(key =>{
        <div>
          <a href={props.posts[key].url}>{props.posts[key].name}</a>
        </div> 
      })}
    </div>
  );
}

export default connect(mapStateToProps)(UserDetails);