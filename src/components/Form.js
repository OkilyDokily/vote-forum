import React from 'react';
import { connect } from 'react-redux';
import {v4} from 'uuid';

function Form(props) {

  function submit(e) {
    e.preventDefault();
    const { dispatch } = props;
    const title = document.getElementById("title").value;
    const url = document.getElementById("url").value;
    dispatch({ type: "ADD", url: url, title:title, id:v4(),userid:1, date:new Date()})
    dispatch({type:"VIEW",view:"default"});
  }
  return (
    <form onSubmit={submit}>
      <div>
        <label>Title</label>
        <input id="title" type="text" placeholder="title"/>
      </div>
      <div>
        <label>Title</label>
        <input id="url" type="text" placeholder="url" />
      </div>
      <input type="submit" value="POST"/>
    </form>
  );
}


export default connect()(Form);