import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Post(props) {
  const { post, postedby, userVote,  dispatch,loggedIn } = props;
  const { url, title, rate, id,date} = post;

  return (
    <div>
      <p><a href={url}>{title}</a>  posted by <span onClick={() => { dispatch({ type: "USERDETAILS", user: postedby }); dispatch({ type: "VIEW", view: "user-details" }) }}>{postedby.name}</span>, score:{rate} and date is {date.toString()}</p>
      <p>Its vote value for userid:{loggedIn}  is currently {userVote ? userVote : "not voted"}</p>
      <button onClick={() => dispatch({ type: "VOTE", arrow: "up", id: id, userid: 1 })}>Up</button>
      <button onClick={() => dispatch({ type: "VOTE", arrow: "down", id: id, userid: 1 })}>Down</button>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
  postedby:PropTypes.object,
  userVote:PropTypes.string,
  loggedIn:PropTypes.number,
};

export default connect()(Post);

