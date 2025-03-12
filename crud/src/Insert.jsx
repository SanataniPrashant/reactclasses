import React from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios'

import { useState } from 'react'

function Insert() {
  const [Input, setInput] = useState("");

  const handleInput=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput((prevInput)=>({...prevInput,[name]:value}));
    console.log(Input);
  }
  const handleSubmit = (e)=>{
      e.preventDefault ();
      axios.post('http://localhost:3000/student',Input)
      .then(()=>{
        alert("sent suceessfully") 
      })
  }
  return (
    <>
    <div>Insert</div>
    <div style={{margin:"auto", width:"500px"}}>
     <Form >
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label>Enter Name</Form.Label>
         <Form.Control type="text" name='name' onChange={handleInput} />
       </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label>Enter age</Form.Label>
         <Form.Control type="text"  name='age' onChange={handleInput}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label>Enter marks</Form.Label>
         <Form.Control type="text" name='marks' onChange={handleInput}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label>Enter City</Form.Label>
         <Form.Control type="text" name='city' onChange={handleInput}/>
       </Form.Group>
 
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
         <Form.Label></Form.Label>
         <Form.Control type="submit"  onClick={handleSubmit}/>
       </Form.Group>
       
     </Form>
     </div>
     </>
  )
}

export default Insert