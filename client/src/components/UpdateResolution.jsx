import { Link,useNavigate,useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'; 

const UpdateResolution = (props) => {
  const [name,setName] = useState(""); 
  const [type,setType] = useState("");
  const [description,setDescription] = useState(""); 
  const [reward1,setReward1] = useState(""); 
  const [reward2,setReward2] = useState(""); 
  const [reward3,setReward3] = useState(""); 
  const [errors,setErrors] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=> { 
    axios.get(`http://localhost:8000/api/resolution/${id}`)
    .then((res)=>{
      setName(res.data.name); 
      setType(res.data.type); 
      setDescription(res.data.description); 
      setReward1(res.data.reward1);
      setReward2(res.data.reward2);
      setReward3(res.data.reward3);
    })
    .catch(err=>console.log(err))
  },[id])

  const submitHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/resolution/${id}`, {
      name,
      type, 
      description,
      reward1,
      reward2,
      reward3
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
      <form className='w-100 d-flex' onSubmit={submitHandler} >
        <div className='w-25 m-5'>
          <label className='form-label'>Name:</label>
          <input className='form-control' type="text" value={name} name='name' onChange={(e)=>setName(e.target.value)}/>
          {errors.name ? <span className='text-danger'>{errors.name.message}</span> : null} <br/>
          <label className='form-label'>Type:</label>
          <input className='form-control' type="text" value={type} name='type' onChange={(e)=>setType(e.target.value)}/>
          {errors.type && <span className='text-danger'>{errors.type.message}</span>} <br/>
          <label className='form-label'>Description:</label>
          <input className='form-control' type="text" value={description} name='description' onChange={(e)=>setDescription(e.target.value)}/>
          {errors.description && <span className='text-danger'>{errors.description.message}</span>} <br/>
          <input className='btn btn-warning mt-3 w-75' type="submit" value="Edit" />
        </div>
        <div className='w-25 m-5'>
          <label className='form-label'>Reward 1:</label>
          <input className='form-control' name='reward1' value={reward1} type="text" onChange={(e)=>setReward1(e.target.value)} />
          <label className='form-label'>Reward 2:</label>
          <input className='form-control' name='reward2' value={reward2} type="text" onChange={(e)=>setReward2(e.target.value)}/>
          <label className='form-label'>Reward 3:</label>
          <input className='form-control' name='reward3' value={reward3} type="text" onChange={(e)=>setReward3(e.target.value)}/>
            {errors.reward1 && <span className='text-danger'>{errors.reward1.message}</span>} <br/>
        </div>
        
      </form>
    </div>
  )
}

export default UpdateResolution