import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post'

function mapStateToProps(state) {
  return {
    posts: state.posts,
    users: state.users,
    ordered: Object.keys(state.posts).sort((a, b) => state.posts[a].rate - state.posts[b].rate).reverse()
  };
}

class List extends Component {

  render() {
    return (
      <div>
        {
          this.props.ordered.map(key => {
            return <Post post={this.props.posts[key]} user={this.props.users[this.props.posts[key].userid].name} />})
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(List);