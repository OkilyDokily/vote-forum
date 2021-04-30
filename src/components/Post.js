import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

Post.propTypes = {
  post: PropTypes.object,
};

function Post(props) {
  const { post, postedby, userVote,  dispatch } = props;
  const { url, title, rate, id } = post;



  return (
    <div>
      <p><a href={url}>{title}</a>  posted by <span onClick={() => {dispatch({type:"USERDETAILS",user:postedby}); dispatch({type:"VIEW",view:"user-details"})}}>{postedby} </span>, score:{rate} and id is {id} </p>
      <p>Its vote value for userid: 1 is currently {userVote ? userVote : "not voted"}</p>
      <button onClick={() => dispatch({ type: "VOTE", arrow: "up", id: id, userid: 1 })}>Up</button>
      <button onClick={() => dispatch({ type: "VOTE", arrow: "down", id: id, userid: 1 })}>Down</button>
    </div>
  );
}

export default connect()(Post);

