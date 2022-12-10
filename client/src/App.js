import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateResolution from './components/CreateResolution';
import Home from './components/Home';
import {useState} from 'react'
import Info from './components/Info'
import UpdateResolution from './components/UpdateResolution';


function App() {
  const [resolutions,setResolutions] = useState([]); 
  
  // const removeFromDom = resolutionId => {
  //   setResolutions(resolutions.filter(resolution => resolution._id !== resolutionId))
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home resolutions={resolutions} setResolutions={setResolutions}/>} path="/"/>
          <Route element={<CreateResolution resolutions={resolutions} setResolutions={setResolutions} />} path="/resolutions/new"/>
          <Route element={<Info /> } path="/resolutions/:id" />
          <Route element={<UpdateResolution />} path="/resolutions/:id/edit" />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
