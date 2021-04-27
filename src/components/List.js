import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post'

function mapStateToProps(state) {
  return {
    posts: state.posts,
    ordered: Object.keys(state.posts).sort((a, b) => a - b)
  };
}

class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.ordered.map(key => {
            return <Post post={this.props.posts[key]} />
          })
        }
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(List);