import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'; 

const CreateResolution = (props) => {
  const {resolutions,setResolutions} = props;
  const [name,setName] = useState(""); 
  const [type,setType] = useState("");
  const [description,setDescription] = useState(""); 
  const [reward1,setReward1] = useState(""); 
  const [reward2,setReward2] = useState(""); 
  const [reward3,setReward3] = useState(""); 
  const [errors,setErrors] = useState({}); 
  
  const navigate = useNavigate();
  
  const submitHandler = (e) => {
    
    e.preventDefault();

    axios.post('http://localhost:8000/api/resolution', {
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
      setResolutions([...resolutions,res.data])
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
        <Link className='me-5 mt-3 link home' to="/" >Home</Link>
      </div>
      <h3 className='ms-4 text-start'>Think of anoter way to be awesome?</h3> 
      <form className='w-100 d-flex' onSubmit={submitHandler} >
        <div className='w-25 m-5'>
          <label className='form-label'>Name:</label>
          <input className='form-control' type="text" name='name' onChange={(e)=>setName(e.target.value)}/>
          {errors.name ? <span className='text-danger'>{errors.name.message}</span> : null} <br/>
          <label className='form-label'>Type:</label>
          <input className='form-control' type="text" name='type' onChange={(e)=>setType(e.target.value)}/>
          {/* {errors.type ? alert(errors.type.message) : null} */}
          {errors.type && <span className='text-danger'>{errors.type.message}</span>} <br/>
          <label className='form-label'>Description:</label>
          <input className='form-control' type="text" name='description' onChange={(e)=>setDescription(e.target.value)}/>
          {errors.description && <span className='text-danger'>{errors.description.message}</span>} <br/>
          <input className='btn btn-warning mt-3 w-75' type="submit" value="Create" />
        </div>
        <div className='w-25 m-5'>
          <label className='form-label'>Reward 1:</label>
          <input className='form-control' name='reward1' type="text" onChange={(e)=>setReward1(e.target.value)} />
          <label className='form-label'>Reward 2:</label>
          <input className='form-control' name='reward2' type="text" onChange={(e)=>setReward2(e.target.value)}/>
          <label className='form-label'>Reward 3:</label>
          <input className='form-control' name='reward3' type="text" onChange={(e)=>setReward3(e.target.value)}/>
          
          {errors.reward1 && <span className='text-danger'>{errors.reward1.message}</span>} <br/>
        </div>
      </form>
    </div>
  )
}

export default CreateResolution