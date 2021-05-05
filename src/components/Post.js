import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Post(props) {
  const { post, postedby, userVote, dispatch, loggedIn } = props;
  const { url, title, rate, id, date } = post;

  const styles = {
    display:"flex",
    border: "1px solid red",
    backGroundColor: '#f5f2e9',
    padding: "10px",
    marginBottom: "10px"
  }


  return (
    <div style={styles} className="post">
      <p className="rate">{rate}</p>
      <p><a href={"http://" + url}>{title}</a> <span className="small">posted by <span onClick={() => { dispatch({ type: "USERDETAILS", user: postedby }); dispatch({ type: "VIEW", view: "user-details" }) }} className="details">{postedby.name}</span> on {date.toString()} </span></p>
      <div class="vote-buttons">
        <button onClick={() => dispatch({ type: "VOTE", arrow: "up", id: id, userid: 1 })} className={userVote + " up2"}>Up</button>
        <button onClick={() => dispatch({ type: "VOTE", arrow: "down", id: id, userid: 1 })} className={userVote + " down2"}>Down</button>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.object,
  postedby: PropTypes.object,
  userVote: PropTypes.string,
  loggedIn: PropTypes.number,
};

export default connect()(Post);

