import axios from 'axios'
 import { useEffect, useState } from 'react'
 import Form from 'react-bootstrap/Form';
 
 function App() {
 const [studata, setStudata] = useState([]);
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
 
 const deletion =(id)=>{
   axios.delete(`http://localhost:3000/student/${id}`)
   .then(()=>{
     alert("dfghj")
   })
 
 }
 useEffect(
   () => {
     axios.get('http://localhost:3000/student')
     .then(response => {
       setStudata(response.data);
     })
     .catch(error => {
       console.error(error);
     });
     },[deletion])
   return (
     <>
      <div>
      <table border="">
       <thead>
         <tr>
         <th>id</th>
         <th>name</th>
         <th>age</th>
         <th>marks</th>
         <th>city</th>
         <th>Delete</th>
         </tr>
       </thead>
     {
       studata.map((item)=>{
         return(
           <>
           <tbody>
             <tr>
             <td>{item.id}</td>
             <td>{item.name}</td>
             <td>{item.age}</td>
             <td>{item.marks}</td>
             <td>{item.city}</td>
             <td><button onClick={()=>{deletion(item.id)}}>Delete</button></td>
             </tr>
           </tbody>
           </>
         )
       })
     }
      </table>
      </div>
 
 
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
 
 export default App
