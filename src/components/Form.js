import React from 'react';
import { connect } from 'react-redux';
import {v4} from 'uuid';

function Form(props) {

  function submit(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const url = document.getElementById("url").value;
    props.dispatch({ type: "ADD", url: url, title:title, id:v4(),userid:1, date:new Date()})
    props.changeView("default")
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