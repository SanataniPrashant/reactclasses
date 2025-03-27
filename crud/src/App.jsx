import axios from 'axios'

 import { useEffect, useState } from 'react'
import Insert from './Insert';
 
 function App() {
 const [studata, setStudata] = useState([]);
 const [form, setform] = useState(false);
 const [editdata, seteditdata] = useState({});
 
 const handleedit=(e)=>{
  const name = e.target.name;
  const value = e.target.value;
  seteditdata((prev) => ({ ...prev, [name]: value }));
  console.log(editdata);
 }
 
 
 const deletion =(id)=>{
   axios.delete(`http://localhost:3000/student/${id}`)
   .then(()=>{
     alert("dfghj")
   })
 
 };

 const update = (data) => {
  axios.put(`http://localhost:3000/student/${data.id}`, editdata)
    .then(() => {
      alert("Record updated successfully");
      
      setform(false);
    })
    .catch((error) => {
      console.error(error);
    });
};

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
         <th>Edit</th>
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
             <td><button onClick={()=>{setform(true),seteditdata(item)}}>Edit</button></td>
             </tr>
           </tbody>
           </>
         )
       })
     }
      </table>
      </div>
      {
        form && (
          <div>
            <input type="text" value={editdata.name} name='name' onChange={handleedit}/>
            <input type="text" value={editdata.age} name='age' onChange={handleedit}/>
            <input type="text" value={editdata.marks} name='marks' onChange={handleedit}/>
            <input type="text" value={editdata.city} name='city' onChange={handleedit}/>
            <button onClick={()=>{update(editdata)}}>Update</button>
            <button onClick={()=>{setform(false)}}>Cancel</button>
            </div>
            )
      }
 
      <Insert/>

      <h1>sdfghjkljhgfdxcvbnm,</h1>
     </>
   )
 }
 
 export default App
