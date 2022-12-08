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
  },[])
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <h1 className='m-3 text-start'>New Years Resolutions</h1>
        <Link className='me-5 mt-3' to="/resolutions/new">Create</Link>
      </div>
      <h3 className=''>These are the creatures that make Christmas magic happen...</h3> 
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {resolutions.map((resolution,index) => {
            return <tr>
              <td>{resolution.name}</td>
              <td>{resolution.type}</td>
              <td>INFO | UPDATE </td>
              </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Home