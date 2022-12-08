import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateResolution from './controllers/CreateResolution';
import Home from './controllers/Home';
import {useState} from 'react'


function App() {
  const [resolutions,setResolutions] = useState([]); 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home resolutions={resolutions} setResolutions={setResolutions}/>} path="/"/>
          <Route element={<CreateResolution resolutions={resolutions} setResolutions={setResolutions}/>} path="/resolutions/new"/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
