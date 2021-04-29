import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

Post.propTypes = {
  post: PropTypes.object,
};

function Post(props) {
  const { post, user,dispatch } = props;
  const { url, title, rate, id } = post;
  return (
    <div>
      <p><a href={url}>{title}</a>  posted by {user}, score:{rate} and and id is {id}</p>
      <button onClick={() => dispatch({ type: "VOTE", arrow: "up", id: id, userid: 1 })}>Up</button>
      <button onClick={() => dispatch({ type: "VOTE", arrow: "down", id: id, userid: 1 })}>Down</button>
    </div>
  );
}

export default connect()(Post);

