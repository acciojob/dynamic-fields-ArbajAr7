import React, { useState } from 'react';
import NewInput from './NewInput';

const App = () => {
  const [currStudent, setCurrStudent] = useState([{id:Math.random()*100000,values:{name:'',age:''}}]);

  function removeOne(button_id) {
    setCurrStudent(currStudent.filter(student => student.id !== button_id));
  }

  function addMore(e) {
    e.preventDefault();
    setCurrStudent([...currStudent,{id: Math.random() * 100000,values:{name:'',age:''}}]);
  }
  function handleInputChange(id,newValues){
    setCurrStudent(currStudent.map(student=>student.id===id?{...student,values:newValues}:student))
  }
  function handleSubmit(e){
    {
      e.preventDefault();
    
      console.log(currStudent.map(student => student.values));
    
    }
  }

  return (
    <div>
       <form>
        {
          currStudent.map(student => <NewInput key={student.id} div_id={student.id} removeOne={removeOne}   onInputChange={handleInputChange} />)
        }
        <button onClick={addMore}>Add More...</button>
        <button onClick={handleSubmit} type="submit">Submit</button>
       </form>
    </div>
  )
}
export default App