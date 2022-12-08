import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'; 

const CreateResolution = (props) => {
  const {resolutions,setResolutions} = props;
  const [name,setName] = useState(""); 
  const [type,setType] = useState("");
  const [description,setDescription] = useState(""); 
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/resolution', {
      name,
      type, 
      description
    })
    .then(res=>{
      console.log(res);
      console.log(res.data); 
      setResolutions([...resolutions,res.data])
    })
  }
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <h1 className='m-3 text-start'>New Years Resolutions</h1>
        <Link className='me-5 mt-3' to="/" >Home</Link>
      </div>
      <h3 className='ms-4 text-start'>Think of anoter way to be awesome?</h3> 
      <form className='w-50' onSubmit={submitHandler} >
        <label className='form-label'>Name:</label>
        <input className='form-control' type="text" name='name' onChange={(e)=>setName(e.target.value)}/>
        <label className='form-label'>Type:</label>
        <input className='form-control' type="text" name='type' onChange={(e)=>setType(e.target.value)}/>
        <label className='form-label'>Description:</label>
        <input className='form-control' type="text" name='description' onChange={(e)=>setDescription(e.target.value)}/>
        <input className='btn btn-warning mt-3 w-75' type="submit" value="Create" />
      </form>
    </div>
  )
}

export default CreateResolution