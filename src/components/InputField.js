import React from 'react';

const InputField = (props) => {
  const { divid, nameid, ageid, submitbtn, removeField } = props;
  
  return (
    <div id={divid}>
      <input id={nameid} type='text' placeholder='Sam'></input>
      <input id={ageid} type='text' placeholder='Age'></input>
      <button id={submitbtn} onClick={() => removeField(divid)}>Remove</button>
    </div>
  );
}

export default InputField;