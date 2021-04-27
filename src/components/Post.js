import React from 'react';
import PropTypes from 'prop-types';

Post.propTypes = {
  post:PropTypes.object,
};

function Post(props) {
  return (
   <div>
      <p><a href={props.post.url}>{props.post.title}</a></p>
   </div>
  );
}

export default Post;