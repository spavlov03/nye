import axios from 'axios'
import {useEffect} from 'react'
import { Link } from 'react-router-dom'



const Home = ({resolutions,setResolutions}) => {
  useEffect(()=> { 
    axios.get("http://localhost:8000/api/resolutions")
    .then((res)=>{
      setResolutions(res.data); 
    })
    .catch(err=>console.log(err))
  },[setResolutions])
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <h1 className='m-3 text-start'>New Years Resolutions</h1>
        <Link className='me-5 mt-3 link' to="/resolutions/new">Create</Link>
      </div>
      <h3 className=''>These are the creatures that make Christmas magic happen...</h3> 
      <table className='table table-bordered w-75 m-5'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {resolutions.map((resolution,index) => {
            return <tr key={index}>
              <td>{resolution.name}</td>
              <td>{resolution.type}</td>
              <td><Link className="link" to={`/resolutions/${resolution._id}`}>INFO</Link> | <Link className='link' to={`/resolutions/${resolution._id}/edit`}>UPDATE</Link> </td>
              </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home