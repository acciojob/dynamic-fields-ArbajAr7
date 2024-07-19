import React, {useState} from 'react'

const NewInput = ({div_id,removeOne,onInputChange}) => {
  const [inputValues,setInputValues]=useState({name:'',age:''});
  function handleInputChange(e){
    setInputValues({...inputValues,[e.target.name]:e.target.value})
    onInputChange(div_id,{...inputValues,[e.target.name]:e.target.value})
  }

  return (
    <div id={div_id}>
    <input  type="text" name="name" placeholder="Name" value={inputValues.name} onChange={handleInputChange}></input>
    <input  type="text" name="age" placeholder="Age" value={inputValues.age} onChange={handleInputChange}></input> <button onClick={()=>{removeOne(div_id)}}>Remove</button><br/></div>
  )
}

export default NewInput