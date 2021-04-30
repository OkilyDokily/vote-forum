import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import PropTypes from 'prop-types';



function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    users: state.posts.users,
    ordered: Object.keys(state.posts.posts).sort((a, b) => state.posts.posts[a].rate - state.posts.posts[b].rate).reverse()
  };
}

class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.ordered.map(key => {
            return <Post key={key } userVote={this.props.users[1].votes[key]}  post={this.props.posts[key]} postedby={this.props.users[this.props.posts[key].userid].name} />
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