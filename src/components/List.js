import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import PropTypes from 'prop-types';



function mapStateToProps(state) {
  return {
    posts: state.business.posts,
    users: state.business.users,
    loggedIn:state.business.loggedIn,
    ordered: Object.keys(state.business.posts).sort((a, b) => state.business.posts[a].rate - state.business.posts[b].rate).reverse()
  };
}

class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.ordered.map(key => {
            return <Post loggedIn={this.props.loggedIn} key={key} userVote={this.props.users[this.props.loggedIn].votes[key]}  post={this.props.posts[key]} postedby={this.props.users[this.props.posts[key].userid]} />
          })    
        }
      </div>
    );
  }
}

List.propTypes = {
  posts: PropTypes.object,
  users: PropTypes.object
};

export default connect(mapStateToProps)(List);