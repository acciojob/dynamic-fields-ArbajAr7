import React, { useState } from "react";
import './../styles/App.css';
import InputField from "./InputField";

const App = () => {
  const [fields, setFields] = useState([{ id: 1 }]);

  const addMore = () => {
    setFields([...fields, { id: fields.length ? fields[fields.length - 1].id + 1 : 1 }]);
  };

  const handleSubmit = () => {
    const data = fields.map(field => {
      const name = document.getElementById(`name${field.id}`).value;
      const age = document.getElementById(`age${field.id}`).value;
      return { name, age };
    });
    console.log(data);
  };

  const removeField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };

  return (
    <div>
      {fields.map((field, index) => (
        <InputField 
          key={field.id}
          id={`if${index+1}`} 
          divid={field.id} 
          nameid={`name${index+1}`} 
          ageid={`age${index+1}`} 
          submitbtn={`submit${index+1}`} 
          removeField={removeField} 
        />
      ))}
      <button onClick={addMore}>Add More...</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;