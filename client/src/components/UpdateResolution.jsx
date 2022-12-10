import { Link,useNavigate,useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'; 

const UpdateResolution = (props) => {
  const [name,setName] = useState(""); 
  const [type,setType] = useState("");
  const [description,setDescription] = useState(""); 
  const [errors,setErrors] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=> { 
    axios.get(`http://localhost:8000/api/resolution/${id}`)
    .then((res)=>{
      setName(res.data.name); 
      setType(res.data.type); 
      setDescription(res.data.description); 
    })
    .catch(err=>console.log(err))
  },[id])

  const submitHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/resolution/${id}`, {
      name,
      type, 
      description
    })
    .then(res=>{
      console.log(res);
      console.log(res.data);
      navigate("/")
    })
    .catch((err)=>{
      console.log(err)
      setErrors(err.response.data.errors)
    })
  }
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <h1 className='m-3 text-start'>New Years Resolutions</h1>
        <Link className='me-5 mt-3' to="/" >Home</Link>
      </div>
      <h3 className='ms-4 text-start'>Change {name}</h3> 
      <form className='w-50' onSubmit={submitHandler} >
        <label className='form-label'>Name:</label>
        <input className='form-control' type="text" value={name} name='name' onChange={(e)=>setName(e.target.value)}/>
        {errors.name ? <p>{errors.name.message}</p> : null}
        <label className='form-label'>Type:</label>
        <input className='form-control' type="text" value={type} name='type' onChange={(e)=>setType(e.target.value)}/>
        {errors.type && <p>{errors.type.message}</p>}
        <label className='form-label'>Description:</label>
        <input className='form-control' type="text" value={description} name='description' onChange={(e)=>setDescription(e.target.value)}/>
        {errors.description && <p>{errors.description.message}</p>}
        <input className='btn btn-warning mt-3 w-75' type="submit" value="Edit" />
      </form>
    </div>
  )
}

export default UpdateResolution