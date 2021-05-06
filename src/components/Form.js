import React from 'react';
import { connect } from 'react-redux';
import {v4} from 'uuid';

function Form(props) {

  const styles = {
    display: "flex",
    border: "1px solid #f7d5d6",
    backGroundColor: '#f5f2e9',
    padding: "10px",
    marginBottom: "10px",
    flexDirection:"column",
    borderRadius: "15px"
  }

  const inputStyle = {
    height: "55px",
    marginLeft:"0",
    marginTop: "25px",
    borderRadius: "15px"
  }

  const inputColor = {
    backgroundColor: "#ede4e6"
  }


  function submit(e) {
    e.preventDefault();
    const { dispatch } = props;
    const title = document.getElementById("title").value;
    const url = document.getElementById("url").value;
    dispatch({ type: "ADD", url: url, title:title, id:v4(),userid:1, date:new Date()})
    dispatch({type:"VIEW",view:"default"});
  }
  return (
    <form class="wpforms-container wpforms-container-full" id="wpforms-14" onSubmit={submit} style={styles}>
      <div>
        <label>Title:</label>
        <input style={inputColor} id="title" type="text" placeholder="title" required/>
      </div>
      <br/>
      <div>
        <label>Url:</label>
        <input style={inputColor} id="url" type="text" placeholder="url" required/>
      </div>
      <input style={inputStyle} type="submit" value="POST"/>
    </form>
  );
}


export default connect()(Form);