import React from 'react';
import PropTypes from 'prop-types';

Form.propTypes = {
  
};

function Form(props) {
  return (
    <div>
      <div>
        <label>Title</label>
        <input type="text" placeholder="title"/>
      </div>
      <div>
        <label>Title</label>
        <input type="text" placeholder="title" />
      </div>
    </div>
  );
}

export default Form;