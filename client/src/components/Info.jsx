import axios from 'axios'
import {useEffect,useState} from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom'



const Info = () => {
  const [resolution,setResolution] = useState({}); 
  const {id} = useParams();
  const navigate = useNavigate();
  const [likes,setLikes] = useState(0);
  const [disable,setDisable]=useState(false);
  const addLike = () => { 
    setLikes(likes+1); 
    setDisable(true)
    
  }

  useEffect(()=> { 
    axios.get(`http://localhost:8000/api/resolution/${id}`)
    .then((res)=>{
      setResolution(res.data); 
    })
    .catch(err=>console.log(err))
  },[id])
  const DeleteResolution = () =>{
    axios.delete(`http://localhost:8000/api/resolution/${id}`)
      .then((res)=>{ 
        // removeFromDom(id);
        navigate("/")
      })
      .catch(err=>console.log(err))
  }
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <h1 className='m-3 text-start'>New Years Resolutions</h1>
        <Link className='me-5 mt-3' to="/">Home</Link>
      </div>
      <div className='d-flex w-50'>
        <h2 className='text-start ms-3 w-100'>{resolution.name}</h2>
        <button className='flex-shrink-1 btn btn-outline-danger' onClick={DeleteResolution}>Delete</button>
        <Link className='btn btn-outline-warning ms-2' to={`/resolutions/${resolution._id}/edit`}>Edit</Link>
      </div>
      <table className='table table-bordered w-50 m-2'>
        <tbody>
          <tr>
            <td>Type</td>
            <td>{resolution.type}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{resolution.description}</td>
          </tr>
          <tr>
            <td>Rewards</td>
            <td>
              <p>{resolution.reward1}</p>
              <p>{resolution.reward2}</p> 
              <p>{resolution.reward3}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='d-flex m-5'>
        <button className='btn btn-success' onClick={addLike} disabled={disable}>Like</button>
        <span>{likes} like(s)</span>
      </div>
    </div>
  )
}

export default Info